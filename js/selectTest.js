//テストモードの設定 falseで右クリック禁止
const testMode = true;

//変数の設定
const cssArea = $(".cssArea");
const htmlArea = $("#htmlArea");
const styleArea = $("#styleArea");
const sampleArea = $(".viewInner");
const subArea = $(".subArea");

//メニューエリアの初期書き出し
let stageSetItems = '<ul class="stageList font-en">';

$.each(stageArray, function (index, item) {
  stageSetItems += `<li data-role="nav" data-type="stage" data-name=${item.stageName} class="selectMenu">${item.stageName}</li>`;
});

stageSetItems += "</ul>";
subArea.html(stageSetItems);

//サブエリアクリック時の動き
let currentStage = null;
let currentBtn = true;
$(document).on("click", ".selectMenu", function () {
  if ($(this).data("role") === "nav") {
    switch ($(this).data("type")) {
      case "stage":
        currentStage = $(this).data("name");
        $.each(stageArray, function (index, item) {
          if (item.stageName === currentStage) {
            sampleArea.html(item.stageTask);
          }
        });
        setNav($(this).data());
        break;
      case "test":
        currentBtn = true;
        const stageNm = $(this).parent().data("stage");
        const itemVal = $(this).data("val");
        setElem(stageNm, itemVal);
        if (currentBtn) {
          $(this).parent().find("li").removeClass("current");
          $(this).addClass("current");
        }
        break;
      default:
        break;
    }
  }
});

function setNav(data) {
  if (data.type === "stage") {
    $.each(stageArray, function (index, item) {
      if (item.stageName === data.name) {
        let navElem = '<div class="stageMenu appendMenu">';
        navElem += `<p class="pagenation font-en"><span class="back">＜back</span><span class="current">${item.stageName}</span></p>`;
        navElem += `<ul class="stageList" data-stage=${item.stageName}>`;
        navElem += `<li data-role="nav" data-type="test" data-val="task" class="selectMenu current">出題を見る</li>`;
        navElem += `<li data-role="nav" data-type="test" data-val="sample" class="selectMenu">見本を見る</li>`;
        navElem += `<li data-role="nav" data-type="test" data-val="coding" class="selectMenu">回答する</li>`;
        navElem += `<li data-role="nav" data-type="test" data-val="answer" class="selectMenu">解答例を見る</li>`;
        navElem += `</ul>`;
        navElem += `</div>`;
        subArea.append(navElem);
      }
    });
  }
}

function setElem(stage, itemVal) {
  $.each(stageArray, function (index, item) {
    if (item.stageName === stage) {
      switch (itemVal) {
        case "task":
          sampleArea.html(item.stageTask);
          htmlArea.val("");
          styleArea.val("");
          deleteComment();
          break;
        case "sample":
          sampleArea.html(item.stageHtml);
          htmlArea.val("");
          styleArea.val("");
          setStyles(item.sampleStyleCode, 1);
          deleteComment();
          break;
        case "coding":
          sampleArea.html(item.stageHtml);
          htmlArea.val(item.stageHtml);
          if (localStorage.getItem(currentStage) != null) {
            const styleElem = JSON.parse(localStorage.getItem(currentStage));
            setStyles(styleElem, 1);
            styleArea.val(styleElem);
          } else {
            setStyles(item.defaultStyle, 0);
            styleArea.val(item.defaultStyle);
          }
          deleteComment();
          break;
        case "answer":
          if (!confirm("本当に解答を見ますか？")) {
            currentBtn = false;
            break;
          } else {
            sampleArea.html(item.stageHtml);
            htmlArea.val(item.stageHtml);
            styleArea.val(item.sampleStyleCode);
            setStyles(item.sampleStyleCode, 1);
            deleteComment();
            setComment(item.comment);
            break;
          }

        default:
          break;
      }
    }
  });
}

$(document).on("click", ".back", function () {
  sampleArea.html("");
  htmlArea.val("");
  styleArea.val("");
  $(this).parent().parent().remove();
});

function setStyles(val, flag) {
  let classItems = val.split(/}/);
  let Items = classItems.map(function (item) {
    let codeItem = item.split(/[{}\n]/);
    codeItem = codeItem.filter(function (s) {
      return s !== "";
    });
    let classObj = {};
    let itemObj = {};
    $.each(codeItem, function (index, item) {
      item = item.trim();
      if (index === 0) {
        classObj = { classNm: item };
      } else {
        item = item.replace(/;/, "").split(/:/);
        itemObj = { ...itemObj, [item[0]]: item[1] };
      }
    });
    classObj = { ...classObj, itemObj };
    return classObj;
  });
  Items.pop();

  $.each(Items, function (index, item) {
    $(item.classNm).removeAttr("style");
    $(item.classNm).css(item.itemObj);
  });
  if (flag === 0) {
    localStorage.setItem(currentStage, JSON.stringify(val));
  }
}

function insertSpace(val) {
  const curserPosition = styleArea.get(0).selectionStart;
  let insertedVal =
    val.substr(0, curserPosition) + "    " + val.substr(curserPosition);
  styleArea.val(insertedVal);
  styleArea.get(0).setSelectionRange(curserPosition + 4, curserPosition + 4);
}

styleArea.on("keyup", function (e) {
  let code = styleArea.val();
  setStyles(code, 0);
  if (e.keyCode == 13) {
    insertSpace(code);
  }
});

let htmlVal = htmlArea.val();
sampleArea.html(htmlVal);

htmlArea.on("keyup", function () {
  let htmlVal = htmlArea.val();
  sampleArea.html(htmlVal);
  let code = styleArea.val();
  setStyles(code, 0);
});

if (!testMode) {
  $(document).on("contextmenu", function (e) {
    return false;
  });
}

$(document).on("click", ".btnComment", function () {
  console.log(currentStage);
  $.each(stageArray, function (index, item) {
    if (item.stageName === currentStage) {
      $("body").append(
        `<div class="commentModalWrap"><div class="commentArea">${item.comment}<div class="close"></div></div></div>`
      );
    }
  });
});

$(document).on("click", ".close", function () {
  $(".commentModalWrap").remove();
});

function setComment(comment) {
  $(".appendMenu .stageList").append(
    '<div class="selectMenu btnComment">解説を見る</div>'
  );
}

function deleteComment() {
  $(".btnComment").remove();
}
