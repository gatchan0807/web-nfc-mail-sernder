type FIXME_any = any;

function doGet(event: FIXME_any) {
  Logger.log(event)
  return JSON.stringify(event)
}
