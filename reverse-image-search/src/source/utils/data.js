const optionKeys = [
  'engines',
  'disabledEngines',
  'showInContextMenu',
  'searchAllEnginesContextMenu',
  'searchAllEnginesAction',
  'tabInBackgound',
  'localGoogle',
  'imgFullParse',
  'searchModeAction',
  'searchModeContextMenu',
  'bypassImageHostBlocking',
  'shareImageContextMenu',
  'convertSharedImage',
  'autoPasteAction',
  'confirmPaste',
  'detectAltImageDimension',
  'viewImageContextMenu',
  'viewImageUseViewer',
  'appTheme',
  'showContribPage',
  'showEngineIcons',
  'pinActionToolbarViewImage',
  'pinActionToolbarShareImage',
  'pinActionToolbarOptions',
  'pinActionToolbarContribute'
];

const searchUrl = browser.runtime.getURL('/src/search/index.html') + '?id={id}';

const engines = {
  bing: {
    url: {
      target:
        'https://www.bing.com/images/search?q=imgurl:{imgUrl}&view=detailv2' +
        '&iss=sbi&FORM=IRSBIQ&redirecturl=https%3A%2F%2Fwww.bing.com' +
        '%2Fimages%2Fdiscover%3Fform%3DHDRSC2#enterInsights'
    },
    image: {
      target: 'https://www.bing.com/',
      isExec: true
    }
  },
  yandex: {
    url: {
      target: 'https://yandex.com/images/search?url={imgUrl}&rpt=imageview'
    },
    image: {
      target: 'https://yandex.com/images/',
      isExec: true
    }
  },
  baidu: {
    url: {
      target: 'https://www.baidu.com/',
      isExec: true
    },
    image: {
      target: 'https://www.baidu.com/',
      isExec: true
    }
  },
  tineye: {
    url: {target: 'https://www.tineye.com/search/?&url={imgUrl}'},
    image: {
      target: 'https://www.tineye.com/',
      isExec: true
    }
  },
  sogou: {
    url: {target: 'https://pic.sogou.com/ris?query={imgUrl}&flag=1&drag=0'},
    image: {
      target: 'https://pic.sogou.com/',
      isExec: true
    }
  },
  whatanime: {
    url: {target: 'https://trace.moe/?url={imgUrl}'},
    image: {
      target: 'https://trace.moe/',
      isExec: true
    }
  },
  saucenao: {
    url: {
      target: 'https://saucenao.com/',
      isExec: true
    },
    image: {
      target: 'https://saucenao.com/',
      isExec: true
    }
  },
  iqdb: {
    url: {target: 'https://iqdb.org/?url={imgUrl}'},
    image: {
      target: 'https://iqdb.org/',
      isExec: true
    }
  },
  ascii2d: {
    url: {target: 'https://ascii2d.net/search/url/{imgUrl}'},
    image: {
      target: 'https://ascii2d.net/',
      isExec: true
    }
  },
  getty: {
    image: {
      target: 'https://www.gettyimages.com/',
      isExec: true
    }
  },
  istock: {
    image: {
      target: 'https://www.istockphoto.com/',
      isExec: true
    }
  },
  shutterstock: {
    image: {
      target: 'https://www.shutterstock.com/images',
      isExec: true
    }
  },
  adobestock: {
    image: {
      target: 'https://stock.adobe.com/',
      isExec: true
    }
  },
  depositphotos: {
    image: {
      target: 'https://depositphotos.com/',
      isExec: true
    }
  },
  pinterest: {
    image: {
      target: searchUrl,
      isTaskId: true
    }
  },
  qihoo: {
    image: {
      target: 'https://st.so.com/',
      isExec: true
    }
  },
  taobao: {
    image: {
      target: 'https://www.taobao.com/',
      isExec: true
    }
  },
  alibabaChina: {
    image: {
      target: 'https://www.1688.com/',
      isExec: true
    }
  },
  dreamstime: {
    image: {
      target: 'https://www.dreamstime.com/',
      isExec: true
    }
  },
  alamy: {
    image: {
      target: 'https://www.alamy.com/',
      isExec: true
    }
  },
  '123rf': {
    image: {
      target: 'https://www.123rf.com/',
      isExec: true
    }
  },
  esearch: {
    image: {
      target: 'https://euipo.europa.eu/eSearch/',
      isExec: true
    }
  },
  tmview: {
    image: {
      target: 'https://www.tmdn.org/tmview/#/tmview',
      isExec: true
    }
  },
  branddb: {
    image: {
      target: 'https://branddb.wipo.int/en/similarlogo',
      isExec: true
    }
  },
  madridMonitor: {
    image: {
      target: 'https://www3.wipo.int/madrid/monitor/en/',
      isExec: true
    }
  },
  auTrademark: {
    image: {
      target: 'https://search.ipaustralia.gov.au/trademarks/search/advanced',
      isExec: true
    }
  },
  auDesign: {
    image: {
      target: 'https://search.ipaustralia.gov.au/designs/search/advanced',
      isExec: true
    }
  },
  nzTrademark: {
    image: {
      target: 'https://app.iponz.govt.nz/app/TradeMarkCheck',
      isExec: true
    }
  },
  jpDesign: {
    image: {
      target: 'https://www.graphic-image.inpit.go.jp/',
      isExec: true
    }
  },
  pimeyes: {
    image: {
      target: 'https://pimeyes.com/en',
      isExec: true
    }
  },
  stocksy: {
    image: {
      target: 'https://www.stocksy.com/',
      isExec: true
    }
  },
  pond5: {
    image: {
      target: 'https://www.pond5.com/stock-images/',
      isExec: true
    }
  },
  pixta: {
    image: {
      target: 'https://www.pixtastock.com/',
      isExec: true
    }
  },
  ikea: {
    image: {
      target: 'https://www.ikea.com/',
      isExec: true
    }
  },
  repostSleuth: {
    url: {
      target:
        'https://repostsleuth.com/search?targetImageMatch=60&filterSameAuthor=false',
      isExec: true
    },
    image: {
      target:
        'https://repostsleuth.com/search?targetImageMatch=60&filterSameAuthor=false',
      isExec: true
    }
  },
  shein: {
    image: {
      target: 'https://m.shein.com/presearch',
      isExec: true
    }
  },
  lykdat: {
    image: {
      target: 'https://lykdat.com/',
      isExec: true
    }
  },
  wildberries: {
    image: {
      target: 'https://www.wildberries.ru/',
      isExec: true
    }
  },
  googleLens: {
    url: {
      target: 'https://www.google.com/webhp',
      isExec: true
    },
    image: {
      target: 'https://www.google.com/webhp',
      isExec: true
    }
  },
  lexica: {
    url: {target: 'https://lexica.art/?q={imgUrl}'},
    image: {
      target: 'https://lexica.art/',
      isExec: true
    }
  },
  kagi: {
    url: {
      target: 'https://kagi.com/images',
      isExec: true
    },
    image: {
      target: 'https://kagi.com/images',
      isExec: true
    }
  },
  freepik: {
    image: {
      target: 'https://www.freepik.com/search',
      isExec: true
    }
  },
  icons8: {
    image: {
      target: 'https://icons8.com/',
      isExec: true
    }
  },
  lenso: {
    url: {
      target: 'https://lenso.ai/en/search-by-url?url={imgUrl}&utm_source=sbi',
      isExec: true
    },
    image: {
      target: 'https://lenso.ai/en?utm_source=sbi',
      isExec: true
    }
  },
  googleImages: {
    url: {
      target:
        'https://www.google.com/searchbyimage?sbisrc=cr_1_5_2&image_url={imgUrl}',
      isExec: true
    },

    image: {
      target: searchUrl,
      isTaskId: true
    }
  },
  unsplash: {
    image: {
      target: 'https://unsplash.com/',
      isExec: true
    }
  }
};

const censoredEngines = ['baidu', 'sogou', 'qihoo', 'taobao', 'alibabaChina'];

const engineIconAlias = {branddb: 'wipo', madridMonitor: 'wipo'};

const engineIconVariants = {
  getty: ['dark'],
  istock: ['dark'],
  depositphotos: ['dark'],
  alamy: ['dark'],
  '123rf': ['dark'],
  nzTrademark: ['dark'],
  stocksy: ['dark'],
  lykdat: ['dark'],
  lexica: ['dark'],
  jpDesign: ['dark'],
  pimeyes: ['dark'],
  pond5: ['dark'],
  saucenao: ['dark'],
  ascii2d: ['dark'],
  tmview: ['dark'],
  pixta: ['dark'],
  freepik: ['dark'],
  lenso: ['dark'],
  unsplash: ['dark']
};

const sponsorLogoVariants = {
  lenso: ['dark']
};

const rasterEngineIcons = ['iqdb', 'tineye', 'whatanime', 'repostSleuth'];

// https://github.com/jshttp/mime-db
const imageMimeTypes = {
  'image/aces': ['exr'],
  'image/apng': ['apng'],
  'image/avci': ['avci'],
  'image/avcs': ['avcs'],
  'image/avif': ['avif'],
  'image/bmp': ['bmp', 'dib'],
  'image/cgm': ['cgm'],
  'image/dicom-rle': ['drle'],
  'image/dpx': ['dpx'],
  'image/emf': ['emf'],
  'image/fits': ['fits'],
  'image/g3fax': ['g3'],
  'image/gif': ['gif'],
  'image/heic': ['heic'],
  'image/heic-sequence': ['heics'],
  'image/heif': ['heif'],
  'image/heif-sequence': ['heifs'],
  'image/hej2k': ['hej2'],
  'image/hsj2': ['hsj2'],
  'image/ief': ['ief'],
  'image/jls': ['jls'],
  'image/jp2': ['jp2', 'jpg2'],
  'image/jpeg': ['jpg', 'jpeg', 'jpe'],
  'image/jph': ['jph'],
  'image/jphc': ['jhc'],
  'image/jpm': ['jpm', 'jpgm'],
  'image/jpx': ['jpx', 'jpf'],
  'image/jxr': ['jxr'],
  'image/jxra': ['jxra'],
  'image/jxrs': ['jxrs'],
  'image/jxs': ['jxs'],
  'image/jxsc': ['jxsc'],
  'image/jxsi': ['jxsi'],
  'image/jxss': ['jxss'],
  'image/ktx': ['ktx'],
  'image/ktx2': ['ktx2'],
  'image/png': ['png'],
  'image/prs.btif': ['btif', 'btf'],
  'image/prs.pti': ['pti'],
  'image/sgi': ['sgi'],
  'image/svg+xml': ['svg', 'svgz'],
  'image/t38': ['t38'],
  'image/tiff': ['tif', 'tiff'],
  'image/tiff-fx': ['tfx'],
  'image/vnd.adobe.photoshop': ['psd'],
  'image/vnd.airzip.accelerator.azv': ['azv'],
  'image/vnd.dece.graphic': ['uvi', 'uvvi', 'uvg', 'uvvg'],
  'image/vnd.djvu': ['djvu', 'djv'],
  'image/vnd.dvb.subtitle': ['sub'],
  'image/vnd.dwg': ['dwg'],
  'image/vnd.dxf': ['dxf'],
  'image/vnd.fastbidsheet': ['fbs'],
  'image/vnd.fpx': ['fpx'],
  'image/vnd.fst': ['fst'],
  'image/vnd.fujixerox.edmics-mmr': ['mmr'],
  'image/vnd.fujixerox.edmics-rlc': ['rlc'],
  'image/vnd.microsoft.icon': ['ico'],
  'image/vnd.ms-dds': ['dds'],
  'image/vnd.ms-modi': ['mdi'],
  'image/vnd.ms-photo': ['wdp'],
  'image/vnd.net-fpx': ['npx'],
  'image/vnd.pco.b16': ['b16'],
  'image/vnd.tencent.tap': ['tap'],
  'image/vnd.valve.source.texture': ['vtf'],
  'image/vnd.wap.wbmp': ['wbmp'],
  'image/vnd.xiff': ['xif'],
  'image/vnd.zbrush.pcx': ['pcx'],
  'image/webp': ['webp'],
  'image/wmf': ['wmf'],
  'image/x-3ds': ['3ds'],
  'image/x-cmu-raster': ['ras'],
  'image/x-cmx': ['cmx'],
  'image/x-freehand': ['fh', 'fhc', 'fh4', 'fh5', 'fh7'],
  'image/x-icon': ['ico'],
  'image/x-jng': ['jng'],
  'image/x-mrsid-image': ['sid'],
  'image/x-ms-bmp': ['bmp'],
  'image/x-pcx': ['pcx'],
  'image/x-pict': ['pic', 'pct'],
  'image/x-portable-anymap': ['pnm'],
  'image/x-portable-bitmap': ['pbm'],
  'image/x-portable-graymap': ['pgm'],
  'image/x-portable-pixmap': ['ppm'],
  'image/x-rgb': ['rgb'],
  'image/x-tga': ['tga'],
  'image/x-xbitmap': ['xbm'],
  'image/x-xpixmap': ['xpm'],
  'image/x-xwindowdump': ['xwd']
};

Object.assign(imageMimeTypes, {
  'image/jxl': ['jxl']
});

const imageTypeNames = {
  'image/aces': '',
  'image/apng': 'APNG',
  'image/avci': '',
  'image/avcs': '',
  'image/avif': 'AVIF',
  'image/bmp': 'BMP',
  'image/cgm': '',
  'image/dicom-rle': '',
  'image/emf': '',
  'image/fits': '',
  'image/g3fax': '',
  'image/gif': 'GIF',
  'image/heic': 'HEIC',
  'image/heic-sequence': '',
  'image/heif': 'HEIF',
  'image/heif-sequence': '',
  'image/hej2k': '',
  'image/hsj2': '',
  'image/ief': '',
  'image/jls': '',
  'image/jp2': 'JP2',
  'image/jpeg': 'JPEG',
  'image/jph': '',
  'image/jphc': '',
  'image/jpm': '',
  'image/jpx': 'JPX',
  'image/jxr': '',
  'image/jxra': '',
  'image/jxrs': '',
  'image/jxs': '',
  'image/jxsc': '',
  'image/jxsi': '',
  'image/jxss': '',
  'image/ktx': '',
  'image/ktx2': '',
  'image/png': 'PNG',
  'image/prs.btif': '',
  'image/prs.pti': '',
  'image/sgi': '',
  'image/svg+xml': 'SVG',
  'image/t38': '',
  'image/tiff': 'TIFF',
  'image/tiff-fx': '',
  'image/vnd.adobe.photoshop': 'PSD',
  'image/vnd.airzip.accelerator.azv': '',
  'image/vnd.dece.graphic': '',
  'image/vnd.djvu': '',
  'image/vnd.dvb.subtitle': '',
  'image/vnd.dwg': '',
  'image/vnd.dxf': '',
  'image/vnd.fastbidsheet': '',
  'image/vnd.fpx': '',
  'image/vnd.fst': '',
  'image/vnd.fujixerox.edmics-mmr': '',
  'image/vnd.fujixerox.edmics-rlc': '',
  'image/vnd.microsoft.icon': 'ICO',
  'image/vnd.ms-dds': '',
  'image/vnd.ms-modi': '',
  'image/vnd.ms-photo': '',
  'image/vnd.net-fpx': '',
  'image/vnd.pco.b16': '',
  'image/vnd.tencent.tap': '',
  'image/vnd.valve.source.texture': '',
  'image/vnd.wap.wbmp': '',
  'image/vnd.xiff': '',
  'image/vnd.zbrush.pcx': '',
  'image/webp': 'WebP',
  'image/wmf': '',
  'image/x-3ds': '',
  'image/x-cmu-raster': '',
  'image/x-cmx': '',
  'image/x-freehand': '',
  'image/x-icon': 'ICO',
  'image/x-jng': '',
  'image/x-mrsid-image': '',
  'image/x-ms-bmp': '',
  'image/x-pcx': '',
  'image/x-pict': '',
  'image/x-portable-anymap': '',
  'image/x-portable-bitmap': '',
  'image/x-portable-graymap': '',
  'image/x-portable-pixmap': '',
  'image/x-rgb': '',
  'image/x-tga': '',
  'image/x-xbitmap': 'XBM',
  'image/x-xpixmap': '',
  'image/x-xwindowdump': ''
};

Object.assign(imageTypeNames, {
  'image/jxl': 'JPEG XL'
});

const convertImageMimeTypes = ['image/webp', 'image/avif'];

const webpEngineSupport = [
  'bing',
  'yandex',
  'baidu',
  'tineye',
  'whatanime',
  'saucenao',
  'ascii2d',
  'adobestock',
  'depositphotos',
  'pinterest',
  'qihoo',
  'alibabaChina',
  'dreamstime',
  'pimeyes',
  'pond5',
  'ikea',
  'shein',
  'lykdat',
  'googleLens',
  'lexica',
  'icons8',
  'lenso',
  'googleImages',
  'unsplash'
];

// Search engines only support the image format in compatible browsers.
// https://caniuse.com/avif
const avifEngineSupport = [
  'bing',
  'yandex',
  'whatanime',
  'adobestock',
  'alibabaChina',
  'dreamstime',
  'pond5',
  'lexica'
];

const gifEngineSupport = [
  'bing',
  'yandex',
  'baidu',
  'sogou',
  'tineye',
  'whatanime',
  'saucenao',
  'iqdb',
  'ascii2d',
  'qihoo',
  'dreamstime',
  'esearch',
  'tmview',
  'madridMonitor',
  'auDesign',
  'nzTrademark',
  'jpDesign',
  'pond5',
  'repostSleuth',
  'shein',
  'lykdat',
  'wildberries',
  'lexica',
  'googleImages',
  'unsplash'
];

const maxImageUploadSize = {
  bing: {api: 600 * 1024, ui: 20 * 1024 * 1024},
  yandex: {api: 4 * 1024 * 1024, ui: Infinity},
  baidu: {api: 2 * 1024 * 1024, ui: 10 * 1024 * 1024},
  tineye: {ui: 10 * 1024 * 1024},
  sogou: {ui: 10 * 1024 * 1024},
  whatanime: {ui: Infinity},
  saucenao: {ui: 15 * 1024 * 1024},
  iqdb: {ui: 8 * 1024 * 1024},
  ascii2d: {ui: 5 * 1024 * 1024},
  getty: {ui: 20 * 1024 * 1024},
  istock: {ui: 20 * 1024 * 1024},
  shutterstock: {ui: 25 * 1024 * 1024},
  adobestock: {ui: 20 * 1024 * 1024},
  depositphotos: {ui: 10 * 1024 * 1024},
  pinterest: {api: Infinity},
  qihoo: {ui: 2 * 1024 * 1024},
  taobao: {ui: 5 * 1024 * 1024},
  alibabaChina: {ui: 20 * 1024 * 1024},
  dreamstime: {ui: Infinity},
  alamy: {ui: 5 * 1024 * 1024},
  '123rf': {api: 5 * 1024 * 1024, ui: 5 * 1024 * 1024},
  esearch: {ui: 5 * 1024 * 1024},
  tmview: {ui: 2 * 1024 * 1024},
  branddb: {ui: 2 * 1024 * 1024},
  madridMonitor: {ui: 2 * 1024 * 1024},
  auTrademark: {ui: 8 * 1024 * 1024},
  auDesign: {ui: 20 * 1024 * 1024},
  nzTrademark: {ui: 20 * 1024 * 1024},
  jpDesign: {ui: 5 * 1024 * 1024},
  pimeyes: {ui: Infinity},
  stocksy: {ui: 20 * 1024 * 1024},
  pond5: {ui: 20 * 1024 * 1024},
  pixta: {ui: 5 * 1024 * 1024},
  ikea: {ui: 20 * 1024 * 1024},
  repostSleuth: {ui: Infinity},
  shein: {ui: 10 * 1024 * 1024},
  lykdat: {ui: 9 * 1024 * 1024},
  wildberries: {ui: 8 * 1024 * 1024},
  googleLens: {api: 20 * 1024 * 1024},
  lexica: {ui: 30 * 1024 * 1024},
  kagi: {ui: 1 * 1024 * 1024},
  freepik: {ui: 60 * 1024 * 1024},
  icons8: {ui: 5 * 1024 * 1024},
  lenso: {ui: 10 * 1024 * 1024},
  googleImages: {api: 20 * 1024 * 1024},
  unsplash: {api: Infinity, ui: 20 * 1024 * 1024}
};

const chromeDesktopUA =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

const chromeMobileUA =
  'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36';

const chromeSbiSrc = 'Google Chrome 110.0.5481.78 (Official) Windows';

const supportUrl = 'https://github.com/dessant/search-by-image/issues';

const shareBridgeUrl = 'https://searchbyimage.vapps.dev/share';

const sponsors = ['lenso'];

const sponsorSites = {
  lenso: 'https://lenso.ai/en?utm_source=sbi'
};

export {
  optionKeys,
  engines,
  censoredEngines,
  rasterEngineIcons,
  engineIconAlias,
  engineIconVariants,
  sponsorLogoVariants,
  imageMimeTypes,
  imageTypeNames,
  convertImageMimeTypes,
  webpEngineSupport,
  avifEngineSupport,
  gifEngineSupport,
  maxImageUploadSize,
  chromeDesktopUA,
  chromeMobileUA,
  chromeSbiSrc,
  supportUrl,
  shareBridgeUrl,
  sponsors,
  sponsorSites
};
