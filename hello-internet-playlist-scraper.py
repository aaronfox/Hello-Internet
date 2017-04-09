#! python3
#encoding: utf-8
#
# hello-internet-playlist-scraper.py - scrapes all hello-internet podcast urls on the page and
# puts them in hello-internet-urls.txt

import requests, bs4, sys, os


res = requests.get('https://www.youtube.com/playlist?list=PLe_b-HAZD1pXZl1UzE7Q9IiYMXKxSG7Lg')
res.raise_for_status()

# convert non-readable characters to question marks
newResText = (res.text).encode(sys.stdout.encoding, errors='replace')

youtubeSoup = bs4.BeautifulSoup(newResText, "html.parser")
 
# print(youtubeSoup)
 
youtubeElems = youtubeSoup.select('.pl-video-title-link')
 
# print(youtubeElems)
 
allPlaylistLinks = open('./hello-internet-urls.txt', 'w')

for i in range(len(youtubeElems)):
    # print(youtubeElems[i].get('href'))
    print('Writing ' + ' https://www.youtube.com' + youtubeElems[i].get('href') + '...')
    allPlaylistLinks.write('https://www.youtube.com' + youtubeElems[i].get('href') + '\n')

print('Done.')
    
allPlaylistLinks.close()
