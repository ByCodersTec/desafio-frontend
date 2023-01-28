export type VideoListThumbnail = {
    url: string
    width: number
    height: number
}

export type VideoList = {
    title: string
    description: string
    thumbnails: {
        medium: VideoListThumbnail
        maxres: VideoListThumbnail
    }
    channelTitle: string
}