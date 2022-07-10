const stageArray = [
  {
    level: 1,
    stageName: "stage01",
    stageTask: '<div class="task">文字色と背景色を変えよう！</div>',
    stageHtml:
      '<div class="wrap">\n    <span class="color">文字色（#f00）</span>\n    と背景色（#ccc）を変えてね。\n</div>',
    sampleStyleCode:
      ".wrap{\n    background-color: #ccc;\n}\n.color{\n    color: #f00;\n}",
    defaultStyle: ".wrap{\n    \n}\n.color{\n    \n}",
    comment: "文字色はcolor、背景はbackground-colorが正しいプロパティだ！",
  },
  {
    level: 1,
    stageName: "stage02",
    stageTask: '<div class="task">余白を空けよう！①</div>',
    stageHtml:
      '<div class="wrapA">\n    この要素の下に30pxの余白を入れよう！\n</div>\n<div class="wrapB">\n    余白を入れるプロパティは２つあるけどどちらを使うかな？！\n</div>',
    sampleStyleCode:
      ".wrapA{\n    background-color: #efffff;\n    margin-bottom: 30px;\n}\n.wrapB{\n    background-color: #ffefff;\n    \n}",
    defaultStyle:
      ".wrapA{\n    background-color: #efffff;\n    \n}\n.wrapB{\n    background-color: #ffefff;\n    \n}",
    comment: "要素と要素の間の余白はmarginを使おう！",
  },
  {
    level: 1,
    stageName: "stage03",
    stageTask: '<div class="task">余白を空けよう！②</div>',
    stageHtml:
      '<div class="wrapA">\n    この要素の下に30pxの余白を入れよう！\n</div>\n<div class="wrapB">\n    余白を入れるプロパティは２つあるけどどちらを使うかな？！\n</div>',
    sampleStyleCode:
      ".wrapA{\n    background-color: #efffff;\n    padding-bottom: 30px;\n}\n.wrapB{\n    background-color: #ffefff;\n    \n}",
    defaultStyle:
      ".wrapA{\n    background-color: #efffff;\n    \n}\n.wrapB{\n    background-color: #ffefff;\n    \n}",
    comment: "要素の内側の余白にはpaddingを使おう！",
  },
  {
    level: 2,
    stageName: "stage04",
    stageTask: '<div class="task">テキストを中央寄せにしよう！</div>',
    stageHtml: '<div class="wrap">テキストを中央に寄せてね。</div>',
    sampleStyleCode:
      ".wrap{\n    background-color: #efffff;\n    text-align: center\n}",
    defaultStyle: ".wrap{\n    background-color: #efffff;\n    \n}",
    comment:
      "テキストの寄せを指定するtext-align。他にもいろんな指定があるぞ！調べてみよう！",
  },
  {
    level: 2,
    stageName: "stage05",
    stageTask: '<div class="task">要素を中央寄せにしよう！①</div>',
    stageHtml:
      '<div class="wrap">\n    <div class="item">要素を中央に寄せてね。（width 200px）</div>\n</div>',
    sampleStyleCode:
      ".wrap{\n    background-color: #efffff;\n    \n}\n.item{\n    background-color: #ffefff\n    width: 200px;\n    margin: 0 auto;\n}",
    defaultStyle:
      ".wrap{\n    background-color: #efffff;\n    \n}\n.item{\n    background-color: #ffefff\n}",
    comment:
      "要素（ブロックレベル要素）を寄せたい時は、まず幅を決めてあげないとmarginが効かないぞ！",
  },
  {
    level: 2,
    stageName: "stage06",
    stageTask: '<div class="task">要素を中央寄せにしよう！②</div>',
    stageHtml:
      '<div class="wrap">\n    <img src="./img/img01.jpg" alt="ミドリガメのわた子としずか" />\n</div>',
    sampleStyleCode:
      ".wrap{\n    background-color: #efffff;\n}\n.wrap img{\n    display: block;\n    margin: 0 auto;\n}\n",
    defaultStyle:
      ".wrap{\n    background-color: #efffff;\n    \n}\nwrap img{\n    \n}",
    comment:
      "画像（インライン要素、インラインブロック要素）を寄せたい時は、ただmargin: 0 auto;を指定しても効かないぞ！まずは要素をブロックレベル要素にしてから動かそう！<br />ちなみに、親要素の.wrapにtext-align:center;をかけてあげても中央寄せにできるぞ！",
  },
  {
    level: 3,
    stageName: "stage07",
    stageTask: '<div class="task">flexを使って要素を横並びにしよう！①</div>',
    stageHtml:
      '<div class="wrap">\n    <div class="item">要素を横並びにしてね。（width 200px、要素の間は20pxの余白）</div>\n    <div class="item">要素を横並びにしてね。（width 200px）</div>\n</div>',
    sampleStyleCode:
      ".wrap{\n    background-color: #efffff;\n    display: flex;\n    justify-content: flex-start;\n    gap: 20px;\n}\n.item{\n    background-color: #ffefff;\n    width: 200px;\n}",
    defaultStyle:
      ".wrap{\n    background-color: #efffff;\n    \n}\n.item{\n    background-color: #ffefff\n}",
    comment:
      "flexの使い方はわかったかな？<br />親要素にdisplay: flex;をかけることで子要素を自在に動かせるようになるぞ！<br />横方向の並べ方を指定するのにはjustify-content、要素の間の余白を決めるのはgapと、flexに付随してさまざまなプロパティがあるので、どんなことができるか調べてみよう！",
  },
  {
    level: 3,
    stageName: "stage08",
    stageTask:
      '<div class="task">flexを使って要素を横並びにしよう！②<br />〜上下の位置を中央に揃える〜</div>',
    stageHtml:
      '<div class="wrap">\n    <div class="item">要素を横並びにしてね。（width 200px、要素の間は20pxの余白）</div>\n    <div class="item">要素を横並びにしてね。（width 200px）</div>\n    <div class="item">要素を横並びにしてね。（width 200px）</div>\n</div>',
    sampleStyleCode:
      ".wrap{\n    background-color: #efffff;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    gap: 20px;\n}\n.item{\n    background-color: #ffefff;\n    width: 200px;\n}",
    defaultStyle:
      ".wrap{\n    background-color: #efffff;\n    \n}\n.item{\n    background-color: #ffefff\n}",
    comment:
      "flexで上下の並び方を制御するにはalign-itemsを使うぞ！<br />上下を中央にするだけじゃなく、一番高さの高いものに合わせるstretch（デフォルトで指定されている）など、便利なプロパティがあるので調べてみよう！",
  },
  {
    level: 3,
    stageName: "stage09",
    stageTask: '<div class="task">flexを使って中央寄せをしよう！</div>',
    stageHtml:
      '<div class="wrap">\n    <div class="item">要素を中央に寄せてね。（width 200px）</div>\n</div>',
    sampleStyleCode:
      ".wrap{\n    background-color: #efffff;\n    display: flex;\n    justify-content: center;\n}\n.item{\n    background-color: #ffefff;\n    width: 200px;\n}",
    defaultStyle:
      ".wrap{\n    background-color: #efffff;\n    \n}\n.item{\n    background-color: #ffefff\n}",
    comment:
      "flexというと「２つ以上の子要素を横並びにする」というイメージがあるかもしれないけど、実は子要素が一つでも使えるぞ！<br />キービジュアルの真ん中にキャッチコピーを持ってきたい時など、意外と使える場面が多いから覚えておこう！",
  },
  {
    level: 3,
    stageName: "stage10",
    stageTask: '<div class="task">flexで自在にレイアウトしよう！</div>',
    stageHtml:
      '<div class="wrap">\n    <div class="item item01">この要素はwidth200px<br />要素と要素の間は20px;</div>\n    <div class="item item02">この要素は残りの幅全部</div>\n    <div class="item item03">この要素はwidth200px</div>\n</div>',
    sampleStyleCode:
      ".wrap{\n    background-color: #efffff;\n    display: flex;\n    justify-content: center;\n    gap: 20px;\n}\n.item{\n    background-color: #ffefff;\n    width: 200px;\n}\n.item02{\n    background-color: #ffffef;\n    flex-grow: 1;\n}",
    defaultStyle:
      ".wrap{\n    background-color: #efffff;\n    \n}\n.item{\n    background-color: #ffefff;\n    \n}\n.item02{\n    background-color: #ffffef;\n    \n}",
    comment:
      "flexで複数要素を並べる時、余った幅をどう割り振るか？ということを決めることができる！<br />それがflex:grow;！子要素それぞれに数字を割り振ると、その割合に応じて残った幅を割り当ててくれる！<br />今回は真ん中の要素にだけ1を指定することで、「残りは全部この要素に割り振る」という意味になった！<br />なかなか感覚が掴めないプロパティは値をいじって試してみよう！",
  },
];
