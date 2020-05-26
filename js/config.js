var appConfig = {
    'Lang' : 'EN',
    'api_uri': "https://webapi.kkco.com.tw:23001/api/inquire",
    'pic_path' : 'https://www.kkco.com.tw/img/bg/',
    'cases': [
        {"uri":'images/caseimg-layer1/台中就業視訊博覽會@中興大學.jpg', "alt":"台中就業視訊博覽會@中興大學"},
        {'uri':'images/caseimg-layer1/企業資安攻防競賽@台北松山文創園區.jpg', "alt":"企業資安攻防競賽@台北松山文創園區"},
        {'uri':'images/caseimg-layer1/知名手遊電競比賽@華山文創園區.jpeg', "alt":"知名手遊電競比賽@華山文創園區"},
        {'uri':'images/caseimg-layer1/知名手遊電競比賽@華視大樓攝影棚.JPG', "alt":"知名手遊電競比賽@華視大樓攝影棚"},
        {'uri':'images/caseimg-layer1/知名路跑活動@麗寶賽車場.jpg', "alt":"知名路跑活動@麗寶賽車場"},
       
        {"uri":'images/caseimg-layer1/KK-Work-01-MSI-m2x.jpg', "alt":"知名遊戲品牌辦理世界級賽事"},
        {'uri':'images/caseimg-layer1/KK-Work-02-17PT-m2x.jpg', "alt":"知名直播平台舉辦大型春酒活動"},
        {'uri':'images/caseimg-layer1/KK-Work-03-ASZF-m2x.jpg', "alt":"知名手機品牌舉辦代言人見面會"},
        {'uri':'images/caseimg-layer1/KK-Work-04-17MS18-m2x.jpg', "alt":"知名直播平台舉辦大型聖誕節活動"},
        {'uri':'images/caseimg-layer1/KK-Work-05-HSFIN-m2x.jpg', "alt":"知名職業電競賽事舉辦世界總決賽"},
        {'uri':'images/caseimg-layer1/KK-Work-06-HSYEAR-m2x.jpg', "alt":"知名遊戲品牌於跨年晚會舉辦電競賽事"},
        {'uri':'images/caseimg-layer1/KK-Work-07-AOVFN-m2x.jpg', "alt":"知名職業電競賽事舉辦年度總決賽"},
        {'uri':'images/caseimg-layer1/KK-Work-08-HSAS-m2x.jpg', "alt":"知名遊戲品牌舉辦明星表演賽"},

        {"uri":'images/caseimg-layer2/KK-Work-17-Music-m2x.jpg', "alt":"知名直播平台戶外快閃店@信義香堤大道"},
        {"uri":'images/caseimg-layer2/KK-Work-17-Palace-m2x.jpg', "alt":"知名直播平台尾牙線下活動@台北士林萬麗酒店"},
        {"uri":'images/caseimg-layer2/KK-Work-17RW-m2x.jpg', "alt":"知名直播平台春酒線下活動@大直典華"},
        {"uri":'images/caseimg-layer2/KK-Work-17xms-m2x.jpg', "alt":"知名直播平台聖誕線下活動@華南國際會議中心"},
        {"uri":'images/caseimg-layer2/KK-Work-AGS-m2x.jpg', "alt":"中型科技研討會@台北文創多功能廳"},
        {"uri":'images/caseimg-layer2/KK-Work-AIS3-m2x.jpg', "alt":"AIS3 新型態資安暑期課程@國立交通大學"},
        {"uri":'images/caseimg-layer2/KK-Work-AIS3Summer-m2x.jpg', "alt":"資安課程活動@國立臺灣大學"},
        {"uri":'images/caseimg-layer2/KK-Work-AOVAS-m2x.jpg', "alt":"知名遊戲品牌舉辦明星表演賽@華山文創園區"},
        {"uri":'images/caseimg-layer2/KK-Work-ArenaOfValor-m2x.jpg', "alt":"知名手遊職業競賽"},
        {"uri":'images/caseimg-layer2/KK-Work-ArenaOfValor-Mobile-m2x.jpg', "alt":"知名手遊職業競賽辦理開幕賽@台大體育館"},
        {"uri":'images/caseimg-layer2/KK-Work-Asahi-m2x.jpg', "alt":"知名品牌辦理戶外快閃店@信義香堤大道"},
        {"uri":'images/caseimg-layer2/KK-Work-AWS-m2x.jpg', "alt":"中型科技研討會@台北國際會議中心"},
        {"uri":'images/caseimg-layer2/KK-Work-CallOfDuty-m2x.jpg', "alt":"知名遊戲品牌辦理 Youtuber 百人實況活動@花博流行館"},
        {"uri":'images/caseimg-layer2/KK-Work-Catgame-m2x.jpg', "alt":"知名遊戲品牌辦理粉絲見面會@花漾hana展演空間"},
        {"uri":'images/caseimg-layer2/KK-Work-CodeForGender-m2x.jpg', "alt":"知名媒體辦理黑客松@克緹大樓14樓展演空間"},
        {"uri":'images/caseimg-layer2/KK-Work-CodeForTaiwan-m2x.jpg', "alt":"知名企業辦理公益活動@松山文創園區"},
        {"uri":'images/caseimg-layer2/KK-Work-DVDAY2018-m2x.jpg', "alt":"知名國際研討會@華南國際會議中心"},
        {"uri":'images/caseimg-layer2/KK-Work-FreeFire-m2x.jpg', "alt":"知名遊戲品牌辦理電競活動@華山文創園區"},
        {"uri":'images/caseimg-layer2/KK-Work-Garena-GCS-m2x.jpg', "alt":"知名手遊職業競賽季後賽@內湖網球中心"},
        {"uri":'images/caseimg-layer2/KK-Work-Garena-m2x.jpg', "alt":"知名遊戲品牌辦理城市賽@Syntrend Show"},
        {"uri":'images/caseimg-layer2/KK-Work-GCS2-m2x.jpg', "alt":"知名手遊職業競賽@內湖網球中心"},
        {"uri":'images/caseimg-layer2/KK-Work-GCSMONITOR-m2x.jpg', "alt":"為知名手遊職業競賽進行賽事即時監控"},
        {"uri":'images/caseimg-layer2/KK-Work-HearthStone-m2x.jpg', "alt":"知名遊戲品牌辦理明星賽@和平籃球館"},
        {"uri":'images/caseimg-layer2/KK-Work-Hitcon-Office-m2x.jpg', "alt":"密室脫逃活動@文化大學推廣部"},
        {"uri":'images/caseimg-layer2/KK-Work-Huawei-m2x.jpg', "alt":"知名手機品牌辦理產品體驗活動@台灣各地多處巡迴"},
        {"uri":'images/caseimg-layer2/KK-Work-iQiYi-m2x.jpg', "alt":"知名品牌辦理體驗活動@台灣各地多處巡迴"},
        {"uri":'images/caseimg-layer2/KK-Work-Jobs-Exhibition-m2x.jpg', "alt":"地方政府舉辦就業博覽會@新竹縣立體育館"},
        {"uri":'images/caseimg-layer2/KK-Work-KnowledgeFest-m2x.jpg', "alt":"知名媒體辦理研討會@實踐大學"},
        {"uri":'images/caseimg-layer2/KK-Work-KP-m2x.jpg', "alt":"知名體育賽事@天母公園籃球場"},
        {"uri":'images/caseimg-layer2/KK-Work-Laravel-m2x.jpg', "alt":"中型科技研討會@輔仁大學會議中心"},
        {"uri":'images/caseimg-layer2/KK-Work-LGBT-m2x.jpg', "alt":"台北同志大遊行@凱達格蘭大道"},
        {"uri":'images/caseimg-layer2/KK-Work-LGBT2018-m2x.jpg', "alt":"二十萬人戶外遊行活動提供公眾熱點服務@凱達格蘭大道"},
        {"uri":'images/caseimg-layer2/KK-Work-LMSHK-m2x.jpg', "alt":"知名職業電競賽事@香港亞洲博覽館"},
        {"uri":'images/caseimg-layer2/KK-Work-LMSTC-m2x.jpg', "alt":"知名職業電競賽事@中興大學"},
        {"uri":'images/caseimg-layer2/KK-Work-LOL2018-m2x.jpg', "alt":"知名職業電競賽事@和平籃球館"},
        {"uri":'images/caseimg-layer2/KK-Work-MCD-m2x.jpg', "alt":"知名企業辦理員工大會"},
        {"uri":'images/caseimg-layer2/KK-Work-mdfk-m2x.jpg', "alt":"複雜生活節研討會@台中伴畔旅店"},
        {"uri":'images/caseimg-layer2/KK-Work-Meitu-m2x.jpg', "alt":"知名手機品牌辦理產品體驗活動@台灣各地多處巡迴"},
        {"uri":'images/caseimg-layer2/KK-Work-MITH-m2x.jpg', "alt":"知名企業辦理黑客松活動@GO92志業辦公室"},
        {"uri":'images/caseimg-layer2/KK-Work-NVAI-m2x.jpg', "alt":"知名企業辦理實機課程@台大醫院國際會議中心"},
        {"uri":'images/caseimg-layer2/KK-Work-NVDLI-m2x.jpg', "alt":"知名企業辦理實機課程@台北萬豪酒店"},
        {"uri":'images/caseimg-layer2/KK-Work-NVST-m2x.jpg', "alt":"知名企業辦理記者會@微風南山藝文展演中心"},
        {"uri":'images/caseimg-layer2/KK-Work-RB3tyle-m2x.jpg', "alt":"知名品牌辦理戶外演出活動@中正紀念堂"},
        {"uri":'images/caseimg-layer2/KK-Work-RBRUN2018-m2x.jpg', "alt":"知名品牌辦理戶外路跑活動@桃園青埔"},
        {"uri":'images/caseimg-layer2/KK-Work-Reentry-m2x.jpg', "alt":"可立可贊助北藝大新媒系第六屆畢業展演@松山文創園區"},
        {"uri":'images/caseimg-layer2/KK-Work-ROG-COD4-m2x.jpg', "alt":"知名遊戲品牌辦理 Youtuber 百人實況活動@花博流行館"},
        {"uri":'images/caseimg-layer2/KK-Work-SAP-WorldRun-m2x.jpg', "alt":"知名品牌辦理戶外路跑活動@台中麗寶賽車場"},
        {"uri":'images/caseimg-layer2/KK-Work-Schroders-m2x.jpg', "alt":"知名企業辦理研討會議@ W Taipei"},
        {"uri":'images/caseimg-layer2/KK-Work-Show-m2x.jpg', "alt":"知名直播平台辦理年度頒獎典禮@ATTSHOWBOX"},
        {"uri":'images/caseimg-layer2/KK-Work-SITCON-m2x.jpg', "alt":"中型科技研討會@中央研究院人文館"},
        {"uri":'images/caseimg-layer2/KK-Work-T2TW-m2x.jpg', "alt":"政問第四季節目直播及無線網路建構@華山文創園區"},
        {"uri":'images/caseimg-layer2/KK-Work-TAOZI-m2x.jpg', "alt":"公益親子互動活動@桃子腳國中小"},
        {"uri":'images/caseimg-layer2/KK-Work-THM-Jobs-m2x.jpg', "alt":"地方政府舉辦就業博覽會@新竹縣立體育館"},
        {"uri":'images/caseimg-layer2/KK-Work-VOLVO101-m2x.jpg', "alt":"知名品牌舉辦戶外快閃店@台北101"},
        {"uri":'images/caseimg-layer2/KK-Work-workshop-m2x.jpg', "alt":"知名企業辦理實做課程@華南銀行國際會議中心"}

    ]
};

function getAppConfig() {
    return appConfig
}
