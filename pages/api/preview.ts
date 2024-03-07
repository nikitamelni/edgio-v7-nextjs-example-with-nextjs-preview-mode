// simple example for testing it manually from your browser.
export default function handler(req, res) {
    res.setPreviewData({ 'customValue': 1})
    res.end('Preview mode enabled')
  }