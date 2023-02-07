export default pauseTime
function pauseTime (millTime) {
  const start = Date.now()
  while (true) {
    const nowTime = Date.now()
    const offset = nowTime - start
    if (offset >= millTime) {
      break
    }
  }
}
