import path from 'node:path'
import fs from 'node:fs'
import ffmpeg from 'fluent-ffmpeg'
import ffmpegPath from 'ffmpeg-static'

const projectRoot = process.cwd()
const src = path.join(projectRoot, 'public', 'can_we_create_a_close_up_of_a.mp4')
const out = path.join(projectRoot, 'public', 'hero-mobile.mp4')

if (!ffmpegPath) {
  console.error('ffmpeg-static binary not found')
  process.exit(1)
}

if (!fs.existsSync(src)) {
  console.error('Source video not found:', src)
  process.exit(1)
}

ffmpeg.setFfmpegPath(ffmpegPath)

console.log('Transcoding to', out)

await new Promise((resolve, reject) => {
  ffmpeg(src)
    .videoCodec('libx264')
    .outputOptions([
      '-profile:v baseline',
      '-level 3.0',
      '-pix_fmt yuv420p',
      '-movflags +faststart',
      '-an',
      '-vf scale=\'min(1080,iw)\':\'min(1920,ih)\':force_original_aspect_ratio=decrease',
      '-b:v 1400k',
      '-maxrate 1600k',
      '-bufsize 2800k',
    ])
    .on('error', (err) => reject(err))
    .on('end', () => resolve())
    .save(out)
})

const stats = fs.statSync(out)
console.log('Done. Output size:', Math.round(stats.size / 1024 / 1024), 'MB')
