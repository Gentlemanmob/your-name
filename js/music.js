const audio = document.getElementById('audio'); // 获取音频元素
const cover = document.getElementById('cover'); // 获取封面图像元素
const songTitle = document.getElementById('song-title'); // 获取歌曲标题元素
const songArtist = document.getElementById('song-artist'); // 获取歌手元素
const lyricist = document.getElementById('lyricist'); // 获取作词者元素
const composer = document.getElementById('composer'); // 获取作曲者元素
const progressBar = document.getElementById('progress-bar'); // 获取进度条元素
const playPauseBtn = document.getElementById('play-pause-btn'); // 获取播放/暂停按钮元素
const lyricsContainer = document.getElementById('lyrics'); // 获取歌词容器元素

const songs = [
    // 定义一个包含多个歌曲对象的数组，每个对象包含歌曲的信息
    {
        src: 'audio/song1.mp3',
        title: '前前世世',
        artist: 'RADWIMPS',
        lyricist: '野田洋次郎',
        composer: '野田洋次郎',
        cover: 'image/s1.jpg',
        lyrics: [
            { time: 20, text: 'やっと眼を覚ましたかい それなのになぜ眼も合わせやしないんだい？\n总算醒来了吗 可为何还是不愿与我对视呢？' },
            { time: 30, text: '「遅いよ」と怒る君 これでもやれるだけ飛ばしてきたんだよ\n你生气地抱怨说“太迟了啦” 可是我已经竭尽全力飞奔到你身边了哦' },
            { time: 39, text: '心が身体を追い越してきたんだよ\n我的心甚至超越身体 先一步赶到了你面前' },
            { time: 45, text: '君の髪や瞳だけで胸が痛いよ\n仅仅望着你的发梢和眼眸 胸口就隐隐作痛' },
            { time: 50, text: '同じ時を吸いこんで離したくないよ\n想与你在同一时空下呼吸 不愿分离' },
            { time: 55, text: '遥か昔から知る その声に\n听见那从遥远的过去就熟稔于心的声音' },
            { time: 60, text: '生まれてはじめて 何を言えばいい？\n有生以来第一次 苦恼着该如何回应' },
            { time: 67, text: '君の前前前世から僕は 君を探しはじめたよ\n从你的前前前世开始 我就一直寻觅着你的踪迹' },
            { time: 72, text: 'そのぶきっちょな笑い方をめがけて やってきたんだよ\n追寻着你那略显笨拙的笑容 终于找到了你' },
            { time: 77, text: '君が全然全部なくなって チリヂリになったって\n即使你的一切都化为乌有 幻作碎片纷散各地' },
            { time: 82, text: 'もう迷わない また１から探しはじめるさ\n我也不再迷惘 依旧从头开始寻觅' },
            { time: 87, text: 'むしろ０から また宇宙をはじめてみようか\n或是说将整个宇宙重新归零再出发吧' },
            { time: 103, text: 'どっから話すかな 君が眠っていた間のストーリー\n该从哪儿说起呢 你沉睡时发生的故事' },
            { time: 113, text: '何億 何光年分の物語を語りにきたんだよ けどいざその姿この眼に映すと\n我正是为了述说这数亿光年的故事才来到这里的哦 可是一旦你的身影出现在我的视线里' },
            { time: 128, text: '君も知らぬ君とジャレて 戯れたいよ\n就好想和那个连你都不了解的自己 一起嬉戏打闹' },
            { time: 133, text: '君の消えぬ痛みまで愛してみたいよ\n就连你那无法消除的痛楚 我也想要试着一并疼爱' },
            { time: 138, text: '銀河何個分かの 果てに出逢えた\n不知横跨了几度银河 才终于在尽头与你相遇' },
            { time: 143, text: 'その手を壊さずに どう握ったならいい？\n我该如何握住你的双手 才能不伤害到你呢' },
            { time: 151, text: '君の前前前世から僕は 君を探しはじめたよ\n从你的前前前世开始 我就一直寻觅着你的踪迹' },
            { time: 155, text: 'その騒がしい声と涙をめがけ やってきたんだよ\n追寻着那喧然的声音和泪滴 终于找到了你' },
            { time: 160, text: 'そんな革命前夜の僕らを誰が止めるというんだろう\n谁又能阻止得了这革命前夜的我们呢' },
            { time: 165, text: 'もう迷わない 君のハートに旗を立てるよ\n已不再迷惘了 我要在你的心上树一面旗帜 将其占为己有' },
            { time: 170, text: '君は僕から諦め方を 奪い取ったの\n毕竟你已经从我这把“放弃”这个选项夺走了' },
            { time: 233, text: '前前前世から僕は 君を探しはじめたよ\n从你的前前前世开始 我就一直寻觅着你的踪迹' },
            { time: 237, text: 'そのぶきっちょな笑い方をめがけて やってきたんだよ\n追寻着你那略显笨拙的笑容 终于找到了你' },
            { time: 242, text: '君が全然全部なくなって チリヂリになったって\n即使你的一切都化为乌有 幻作碎片纷散各地' },
            { time: 247, text: 'もう迷わない また１から探しはじめるさ\n我也不再迷惘 依旧从头开始寻觅' },
            { time: 252, text: '何光年でも この歌を口ずさみながら\n无论跨越多少光年 我都会哼着这首歌 再度找到你' }
        ]
    },
    {
        src: 'audio/song2.mp3',
        title: '梦灯笼',
        artist: 'RADWIMPS',
        lyricist: '野田洋次郎',
        composer: '野田洋次郎',
        cover: 'image/s1.jpg',
        lyrics: [
            { time: 23, text: 'あぁ このまま僕たちの声が\n你我二人的呐喊' },
            { time: 28, text: '世界の端っこまで消えることなく\n如若能就此贯穿至' },
            { time: 34, text: '届いたりしたらいいのにな\n世界尽头 就好了呢' },
            { time: 39, text: 'そしたらねぇ 二人で\n如若成真的话 那我们会' },
            { time: 42, text: 'どんな言葉を放とう\n一起喊出怎样的话语呢' },
            { time: 45, text: '消えることない約束を\n那就二人一起' },
            { time: 47, text: '二人で｢せーの｣で 言おう\n定下一个永不磨灭的约定吧' },
            { time: 61, text: 'あぁ｢願ったらなにがしかが叶う｣\n啊「梦想终会成真」' },
            { time: 65, text: 'その言葉の眼を\n这句话' },
            { time: 68, text: 'もう見れなくなったのは\n究竟是从何时起' },
            { time: 69, text: '一体いつからだろうか\n又是为何' },
            { time: 71, text: 'なにゆえだろうか\n变得再也无法直视了呢' },
            { time: 73, text: 'あぁ 雨の止むまさにその切れ間と\n云消雨散的那一瞬间' },
            { time: 76, text: '虹の出発点 終点と\n便是彩虹生命的始终' },
            { time: 79, text: 'この命果てる場所に何かがあるって\n生命的尽头一定有些什么' },
            { time: 82, text: 'いつも言い張っていた\n总是这样坚信' },
            { time: 89, text: 'いつか行こう 全生命も未到\n总有一天 我们会到达' },
            { time: 92, text: '未開拓の\n这前人未至的情感与时间' },
            { time: 94, text: '感情にハイタッチして\n向这心情击掌庆贺' },
            { time: 97, text: '時間にキスを\n与这时刻唇齿相交' },
            { time: 99, text: '５次元にからかわれて\n即便在五次元被戏耍作弄' },
            { time: 101, text: 'それでも君をみるよ\n我也依然要注视着你' },
            { time: 104, text: 'また｢はじめまして｣の合図を\n二人一起定下下一次' },
            { time: 107, text: '決めよう\n“初次见面”时的暗号吧' },
            { time: 110, text: '君の名を 今追いかけるよ\n我会从现在起 追寻着「你的名字」' }
        ]
    },
    {
        src: 'audio/song3.mp3',
        title: '没什么大不了的',
        artist: 'RADWIMPS',
        lyricist: '野田洋次郎',
        composer: '野田洋次郎',
        cover: 'image/s1.jpg',
        lyrics: [
            { time: 0, text: '二人の間 通り過ぎた風は\n掠过两人之间的风' },
            { time: 5, text: 'どこから寂しさを運んできたの\n捎来不知来处的寂寞' },
            { time: 11, text: '泣いたりしたそのあとの空は\n哭泣过后眺望的天空' },
            { time: 17, text: 'やけに透き通っていたりしたんだ\n有种格外的通透' },
            { time: 34, text: 'いつもは尖ってた父の言葉が\n平日里刺耳的父亲的话语' },
            { time: 40, text: '今日は暖かく感じました\n今天却倍感温暖' },
            { time: 46, text: '優しさも笑顔も夢の語り方も\n对温柔、笑容以及梦想的讲述方式都一无所知' },
            { time: 51, text: '知らなくて全部 君を真似たよ\n我只是跟随着你 做你的影子' },
            { time: 57, text: 'もう少しだけでいい あと少しだけでいい\n只要一点点时间就好 再给我一点点时间就好' },
            { time: 62, text: 'もう少しだけでいいから\n真的只要一点点就好' },
            { time: 68, text: 'もう少しだけでいい あと少しだけでいい\n只要一点点时间就好 再给我一点点时间就好' },
            { time: 74, text: 'もう少しだけ くっついていようか\n再让我们相互依偎一会吧' },
            { time: 83, text: '僕らタイムフライヤー 時を駆け上がるクライマー\n我们是时间旅行者 追逐时光的攀岩者' },
            { time: 88, text: '時のかくれんぼ はぐれっこはもういやなんだ\n厌倦了与时间的躲猫猫' },
            { time: 94, text: '嬉しくて泣くのは 悲しくて笑うのは\n喜极而泣 亦或是含泪欢笑' },
            { time: 99, text: '君の心が 君を追い越したんだよ\n都是因为你听从了内心的声音啊' },
            { time: 125, text: '星にまで願って 手にいれたオモチャも\n对着星星许愿才得到的玩具' },
            { time: 131, text: '部屋の隅っこに今 転がってる\n也在房间的一角静静躺着' },
            { time: 137, text: '叶えたい夢も 今日で100個できたよ\n想要实现的梦想到今天就满100个了' },
            { time: 142, text: 'たった一つといつか 交換こしょう\n哪天把它们拿去交换独一无二的那个吧' },
            { time: 154, text: 'いつもは喋らないあの子に今日は\n平日里不曾交谈过的人' },
            { time: 160, text: '放課後「また明日」と声をかけた\n今天放学后对她说了“明天见”' },
            { time: 165, text: '慣れないこともたまにならいいね\n平日里不习惯做的事偶尔做做也不错呢' },
            { time: 171, text: '特にあなたが 隣にいたら\n特别是还有你在身边' },
            { time: 177, text: 'もう少しだけでいい あと少しだけでいい\n只要一点点时间就好 再给我一点点时间就好' },
            { time: 182, text: 'もう少しだけでいいから\n真的只要一点点就好' },
            { time: 188, text: 'もう少しだけでいい あと少しだけでいい\n只要一点点时间就好 再给我一点点时间就好' },
            { time: 194, text: 'もう少しだけくっついていようよ\n再让我们相互依偎一会好吗' },
            { time: 203, text: '僕らタイムフライヤー 君を知っていたんだ\n我们是时间旅行者 你的故事早已熟稔于心' },
            { time: 208, text: '僕が 僕の名前を 覚えるよりずっと前に\n在比我记得我的名字 还要久远的以前' },
            { time: 219, text: '君のいない 世界にも 何かの意味はきっとあって\n你所不存在的那个世界 一定也存在着什么意义' },
            { time: 226, text: 'でも君のいない 世界など 夏休みのない 八月のよう\n但是你所不存在的那个世界 就像没有暑假的八月' },
            { time: 232, text: '君のいない 世界など 笑うことない サンタのよう\n你所不存在的那个世界 就像没有笑容的圣诞老爷爷' },
            { time: 238, text: '君のいない 世界など\n你所不存在的那个世界啊' },
            { time: 272, text: '僕らタイムフライヤー 時を駆け上がるクライマー\n我们是时间旅行者 追逐时光的攀岩者' },
            { time: 277, text: '時のかくれんぼ はぐれっこはもういやなんだ\n厌倦了与时间的躲猫猫' },
            { time: 283, text: 'なんでもないや やっぱりなんでもないや\n没什么 当我什么都没说' },
            { time: 288, text: '今から行くよ\n现在就去找你哦' },
            { time: 291, text: '僕らタイムフライヤー 時を駆け上がるクライマー\n我们是时间旅行者 追逐时光的攀岩者' },
            { time: 297, text: '時のかくれんぼ はぐれっこ はもういいよ\n厌倦了与时间的躲猫猫' },
            { time: 304, text: '君は派手なクライヤー その涙 止めてみたいな\n你真是个爱哭鬼啊 我试图去阻止那眼泪落下' },
            { time: 309, text: 'だけど 君は拒んだ 零れるままの涙を見てわかった\n但是你拒绝了我 看着那零星落下的泪滴我明白了' },
            { time: 315, text: '嬉しくて泣くのは 悲しくて 笑うのは\n喜极而泣 亦或是含泪欢笑' },
            { time: 320, text: '僕の心が 僕を追い越したんだよ\n都是因为我的心已经超越了自己啊' }
        ]
    }
];

let currentSong = 0;  // 当前播放的歌曲索引

function loadSong(song) {
    // 加载选定的歌曲
    audio.src = song.src; // 设置音频源
    cover.src = song.cover; // 设置封面图像
    songTitle.textContent = song.title; // 显示歌曲标题
    songArtist.textContent = song.artist; // 显示艺术家名称
    lyricist.textContent = song.lyricist; // 显示作词者
    composer.textContent = song.composer; // 显示作曲者
    loadLyrics(song.lyrics); // 加载歌词
}

function loadLyrics(lyrics) {
    // 加载歌词
    lyricsContainer.innerHTML = ''; // 清空歌词容器
    lyrics.forEach(line => {
        const p = document.createElement('p'); // 创建一个新的段落元素
        p.textContent = line.text; // 设置歌词文本
        p.dataset.time = line.time; // 设置歌词时间
        lyricsContainer.appendChild(p); // 将歌词添加到容器中
    });
}

function playPause() {
    // 切换播放/暂停
    if (audio.paused) {
        audio.play(); // 播放音频
        playPauseBtn.textContent = '暂停'; // 更改按钮文本为“暂停”
    } else {
        audio.pause(); // 暂停音频
        playPauseBtn.textContent = '播放'; // 更改按钮文本为“播放”
    }
}

function nextSong() {
    // 播放下一首歌曲
    currentSong = (currentSong + 1) % songs.length; // 更新歌曲索引
    loadSong(songs[currentSong]); // 加载新的歌曲
    audio.play(); // 播放音频
    playPauseBtn.textContent = '暂停'; // 更新按钮文本
}

function prevSong() {
    // 播放上一首歌曲
    currentSong = (currentSong - 1 + songs.length) % songs.length; // 更新歌曲索引
    loadSong(songs[currentSong]); // 加载新的歌曲
    audio.play(); // 播放音频
    playPauseBtn.textContent = '暂停'; // 更新按钮文本
}

audio.addEventListener('timeupdate', () => {
    // 监听音频时间更新事件
    const progressPercent = (audio.currentTime / audio.duration) * 100; // 计算播放进度百分比
    progressBar.value = progressPercent; // 更新进度条的值
    syncLyrics(audio.currentTime); // 同步歌词
});

// 监听进度条的拖动事件，更新音频播放位置
progressBar.addEventListener('input', () => {
    const seekTime = (progressBar.value / 100) * audio.duration; // 计算跳转时间
    audio.currentTime = seekTime;  // 设置音频当前时间
});


audio.addEventListener('ended', () => {
    // 监听音频结束事件
    nextSong(); // 播放下一首歌曲
});

function syncLyrics(currentTime) {
    // 同步歌词显示
    const lines = lyricsContainer.querySelectorAll('p'); // 获取所有歌词段落
    let activeLine;


    lines.forEach(line => {
        const lineTime = parseFloat(line.dataset.time); // 获取歌词时间
        if (currentTime >= lineTime) {
            if (activeLine) {
                activeLine.classList.remove('highlight'); // 移除高亮类
            }
            activeLine = line; // 设置当前活动行
            activeLine.classList.add('highlight'); // 添加高亮类
        }
    });

    if (activeLine) {
        activeLine.scrollIntoView({
            behavior: 'smooth', // 平滑滚动
            block: 'center' // 滚动到中心位置
        });
    }
}

// 初始化加载第一首歌曲
loadSong(songs[currentSong]);
