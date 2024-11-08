import os
import requests
from bs4 import BeautifulSoup
import time

# Define the directory to save thumbnails
THUMBNAILS_DIR = 'thumbnails'

# List of app IDs to fetch thumbnails for
app_ids = [
    'com.google.android.apps.messaging',
    'com.zoho.crm',
    'tsc.multipurposemirror.com',
    'com.donatos.phoenix',
    'com.kyucon.ma',
    'com.ups.mychoice',
    'com.king.candycrushsaga',
    'com.sec.android.app.samsungapps',
    'com.adobe.scan.android',
    'com.instagram.android',
    'com.twitter.android',
    'com.facebook.orca',
    'com.whatsapp',
    'com.google.android.youtube',
    'com.spotify.music',
    'com.amazon.mShop.android.shopping',
    'com.snapchat.android',
    'com.ubercab',
    'com.zhiliaoapp.musically',
    'com.badoo.mobile'
]

# User-Agent header to mimic a real browser request
HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) ' +
                  'AppleWebKit/537.36 (KHTML, like Gecko) ' +
                  'Chrome/85.0.4183.102 Safari/537.36'
}

def fetch_app_icon_url(app_id):
    """
    Fetches the app icon URL from the Google Play Store for a given app ID.

    Parameters:
        app_id (str): The unique identifier of the app.

    Returns:
        str or None: The URL of the app icon if found, else None.
    """
    play_store_url = f'https://play.google.com/store/apps/details?id={app_id}&hl=en&gl=US'
    try:
        response = requests.get(play_store_url, headers=HEADERS, timeout=10)
        response.raise_for_status()  # Raise HTTPError for bad responses

        soup = BeautifulSoup(response.text, 'html.parser')

        # Attempt to find the icon URL within meta tags
        meta_tag = soup.find('meta', {'property': 'og:image'})
        if meta_tag and meta_tag.get('content'):
            return meta_tag['content']
        
        # Alternative method: Find link rel="icon"
        link_tag = soup.find('link', rel='icon')
        if link_tag and link_tag.get('href'):
            return link_tag['href']
        
        print(f"Icon URL not found for app ID: {app_id}")
        return None

    except requests.exceptions.HTTPError as http_err:
        print(f"HTTP error occurred for app ID {app_id}: {http_err}")
    except requests.exceptions.RequestException as err:
        print(f"Error occurred for app ID {app_id}: {err}")
    except Exception as e:
        print(f"Unexpected error for app ID {app_id}: {e}")

    return None

def download_image(url, save_path):
    """
    Downloads an image from a given URL and saves it to the specified path.

    Parameters:
        url (str): The URL of the image to download.
        save_path (str): The file path to save the downloaded image.
    """
    try:
        response = requests.get(url, headers=HEADERS, stream=True, timeout=10)
        response.raise_for_status()

        with open(save_path, 'wb') as f:
            for chunk in response.iter_content(1024):
                f.write(chunk)
        print(f"Downloaded thumbnail: {save_path}")
    except requests.exceptions.HTTPError as http_err:
        print(f"HTTP error occurred while downloading {url}: {http_err}")
    except requests.exceptions.RequestException as err:
        print(f"Error occurred while downloading {url}: {err}")
    except Exception as e:
        print(f"Unexpected error while downloading {url}: {e}")

def main():
    # Ensure the thumbnails directory exists
    if not os.path.exists(THUMBNAILS_DIR):
        os.makedirs(THUMBNAILS_DIR)
        print(f"Created directory: {THUMBNAILS_DIR}")

    for app_id in app_ids:
        print(f"Processing app ID: {app_id}")
        icon_url = fetch_app_icon_url(app_id)
        if icon_url:
            # Some URLs might be HTTP, convert to HTTPS
            if icon_url.startswith('//'):
                icon_url = 'https:' + icon_url
            elif icon_url.startswith('http://'):
                icon_url = icon_url.replace('http://', 'https://', 1)

            # Define the path to save the thumbnail
            save_path = os.path.join(THUMBNAILS_DIR, f"{app_id}.png")

            # Download and save the image
            download_image(icon_url, save_path)
        else:
            print(f"Failed to fetch icon URL for app ID: {app_id}")

        # Respectful delay to avoid being blocked by Play Store
        time.sleep(2)  # 2 seconds delay

if __name__ == "__main__":
    main()
