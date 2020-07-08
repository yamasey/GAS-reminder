// メインの関数。シートからある曜日の担当メンバーを抽出し、Slackでメッセージを送ります。

function myFunction() {
  const ss = SpreadsheetApp.openById(PropertiesService.getScriptProperties().getProperty("SPREAD_SHEET_ID"))
  const sheet = ss.getSheets()[0]
  const WEEK = ['日', '月', '火', '水', '木', '金', '土']
  
  
  const memberRows = extractMember(sheet, '土') // TODO: ベタ書きを修正する
  const today = new Date()
  sendMessage(memberRows, today)
}
