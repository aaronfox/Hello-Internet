#! python3
#encoding: utf-8
#
# hello-internet-playlist-scraper.py - scrapes all hello-internet podcast urls on the page and
# puts them in hello-internet-urls.txt

import requests, bs4, sys, os

# get a response from the url containing the hello internet playlist
res = requests.get('https://www.youtube.com/playlist?list=PLe_b-HAZD1pXZl1UzE7Q9IiYMXKxSG7Lg')
# ensure that the response is a-okay
res.raise_for_status()

# convert non-readable characters to question marks
newResText = (res.text).encode(sys.stdout.encoding, errors='replace')

# convert text parsable html
youtubeSoup = bs4.BeautifulSoup(newResText, "html.parser")

# create an array containing all video links
youtubeElems = youtubeSoup.select('.pl-video-title-link')

# write to this file
allPlaylistLinks = open('./hello-internet-urls.txt', 'w')

for i in range(len(youtubeElems)):
    # print(youtubeElems[i].get('href'))
    print('Writing ' + ' https://www.youtube.com' + youtubeElems[i].get('href') + '...')
    allPlaylistLinks.write('https://www.youtube.com' + youtubeElems[i].get('href') + '\n')

print('Done.')
    
allPlaylistLinks.close()
