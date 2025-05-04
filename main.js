const width = 9
const height = 9
const size = 30

const board = []
let focus = null

const init = () => {
    const container = document.createElement('div')
    container.style.position = 'absolute'
    container.style.width = `${width * size + size * 2}px`
    container.style.height = `${height * size + size * 2}px`
    container.style.backgroundColor = '#fff'
    // 今思ったんだが，マス目ってどうやって作るんだ？
    // パネルをいっぱい作っていく方法しか履修してねえからわかんねえよ
    // オセロとかも意外とまだ作ってないし，テトリスは普通にパネルをいっぱい作る方式だったはず？
    // いや普通にパネパネを追加してるだけだった
    document.body.appendChild(container)

    // 今考えると，ナンプレは 9x9 だった, アホが発動していた
    for (let y = 0; y < height; y++) {
        board[y] = []
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
            // これは，リスト的なものを作る必要があるんだろうか
            // 大丈夫だったんだけど，複数選択が可能になってしまってるので，
            // そこの修正は必要
            // というか，下から選んできた数字を反映させるの，普通に難しくないか？
            // まあ，パットは浮かんでこないということは確か

            // t-kihira を確認してきたが，流石に実装がスマートすぎて驚いた
            board[y][x] = { num: 0, pain }
            pain.textContent = `${board[y][x].num ? board[y][x].num:''}`
            pain.onpointerdown = (e) => {
                e.preventDefault()
                if (focus) {
                    [px, py] = focus
                    board[py][px].pain.style.backgroundColor = '#fff'
                }
                focus = [x, y]
                board[y][x].pain.style.backgroundColor = '#ff0'
                console.log(focus);
            }
            container.appendChild(pain)
        }
    }

    for (let x = 0; x <= width; x++) {
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
        pain.style.top = `${size * height + size}px`
        pain.style.left = `${size * x}px`
        pain.style.backgroundColor = '#fff'
        pain.style.border = 'solid 1px #000'
        // この下三つがある必要性が今の僕には理解できない
        pain.style.display = 'flex'
        pain.style.justifyContent = 'center'
        pain.style.alignItems = 'center'
        // なんか若干 text の位置がずれてるのが気になるかもしれない？
        pain.textContent = x < 9 ? `${x + 1}` : ''
        pain.onpointerdown = (e) => {
            e.preventDefault()
            const [tx, ty] = focus
            // なんかこの辺り，重複してる処理を書いてる感じがして気持ち悪い
            board[ty][tx].num = x
            board[ty][tx].pain.textContent = `${x+1}`
            console.log(x);
        }
        container.appendChild(pain)
    }
}

window.onload = () => {
    init()
}