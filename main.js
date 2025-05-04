const width = 10
const height = 10
const size = 30

const init = () => {
    const container = document.createElement('div')
    container.style.position = 'absolute'
    container.style.width = `${width * size}px`
    container.style.height = `${height * size}px`
    container.style.backgroundColor = '#000'
    // 今思ったんだが，マス目ってどうやって作るんだ？
    // パネルをいっぱい作っていく方法しか履修してねえからわかんねえよ
    // オセロとかも意外とまだ作ってないし，テトリスは普通にパネルをいっぱい作る方式だったはず？
    // いや普通にパネパネを追加してるだけだった
    document.body.appendChild(container)

    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            // 普通に考えて，パネルで実装しないと，各マスごとのフォーカスとか作るのが，
            // container に grid をつけるだけだとめんどくさいかもな
            const pain = document.createElement('div')
            pain.style.position = 'absolute'
            pain.style.width = `${size}px`
            pain.style.height = `${size}px`
            pain.style.top = `${size * x}px`
            pain.style.left = `${size * y}px`
            pain.style.backgroundColor = '#fff'
            pain.style.border = 'solid 1px #000'
            // この下三つがある必要性が今の僕には理解できない
            pain.style.display = 'flex'
            pain.style.justifyContent = 'center'
            pain.style.alignItems = 'center'
            // なんか若干 text の位置がずれてるのが気になるかもしれない？
            pain.textContent = `${x + y}`
            // これは，リスト的なものを作る必要があるんだろうか
            pain.onpointerdown = (e) => {
                e.preventDefault()
                pain.backgroundColor = '#ff0'
            }
            container.appendChild(pain)
        }
    }

    for (let x = 0; x < width; x++) {
        // 普通に考えて，パネルで実装しないと，各マスごとのフォーカスとか作るのが，
        // container に grid をつけるだけだとめんどくさいかもな
        // あかんこいつらの指定方法がわかんなくて詰んでる
        // とりあえず，フォーカスオンのコードを書きましょう
        // これは，pain か container どっちにつけるのかって話だけど
        // 流石にややこしくなりそうので，pain でいいんじゃないかと思ってる
        const pain = document.createElement('div')
        pain.style.position = 'absolute'
        pain.style.width = `${size}px`
        pain.style.height = `${size}px`
        pain.style.top = `${size * height + 10}px`
        pain.style.left = `${size * x}px`
        pain.style.backgroundColor = '#fff'
        pain.style.border = 'solid 1px #000'
        // この下三つがある必要性が今の僕には理解できない
        pain.style.display = 'flex'
        pain.style.justifyContent = 'center'
        pain.style.alignItems = 'center'
        // なんか若干 text の位置がずれてるのが気になるかもしれない？
        pain.textContent = `${x + y}`
        body.appendChild(pain)
    }
}

window.onload = () => {
    init()
}