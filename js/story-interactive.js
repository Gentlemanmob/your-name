// 场景数据 - 以泷视角叙述的完整剧情
const scenes = [
    {
        id: 1,
        title: "第一章：梦醒时分",
        bg: "image/name1.jpg",
        subtitles: [
            { text: "清晨的阳光透过窗帘洒进来...", type: "narration" },
            { text: "我从睡梦中醒来，却有一种奇怪的感觉。", type: "inner" },
            { text: "昨晚...我好像做了一个很长的梦。", type: "inner" },
            { text: "梦里，我变成了另一个人。", type: "inner" },
            { text: "一个生活在乡下小镇的女孩...", type: "narration" },
            { text: "这种感觉如此真实，以至于醒来后我还在恍惚。", type: "inner" }
        ]
    },
    {
        id: 2,
        title: "第二章：初次交换",
        bg: "image/name2.jpg",
        subtitles: [
            { text: "接下来的日子里，这种“梦”越来越频繁。", type: "narration" },
            { text: "每隔几天，我就会在“她的”身体里醒来。", type: "inner" },
            { text: "乡下的小镇，糸守町...一个我从未去过的地方。", type: "narration" },
            { text: "她的名字是——宫水三叶。", type: "narration" },
            { text: "起初我以为这只是奇怪的梦境。", type: "inner" },
            { text: "直到周围的人告诉我，我昨天做了很多“不像我”的事情...", type: "inner" }
        ]
    },
    {
        id: 3,
        title: "第三章：乡间生活",
        bg: "image/name3.jpg",
        subtitles: [
            { text: "以三叶的身份生活，让我体验了完全不同的世界。", type: "narration" },
            { text: "清晨帮忙神社的工作，编织结绳...", type: "narration" },
            { text: "这种小镇的生活节奏，和东京截然不同。", type: "inner" },
            { text: "三叶对这种生活感到厌烦，我却觉得很新奇。", type: "inner" },
            { text: "她憧憬着东京的繁华生活...", type: "narration" },
            { text: "而我，正好生活在她向往的那个世界。", type: "inner" }
        ]
    },
    {
        id: 4,
        title: "第四章：留言约定",
        bg: "image/name4.jpg",
        subtitles: [
            { text: "我们很快意识到，这不是普通的梦。", type: "narration" },
            { text: "于是我们开始用手机留言，记录彼此的生活。", type: "narration" },
            { text: "\"不要乱动我的东西！\"", type: "dialogue" },
            { text: "\"约会的事情交给我帮你安排！\"", type: "dialogue" },
            { text: "我们约定了各自的规则，开始适应这种奇妙的生活。", type: "narration" },
            { text: "渐渐地，我们成为了彼此生活的一部分。", type: "inner" }
        ]
    },
    {
        id: 5,
        title: "第五章：东京向往",
        bg: "image/c2.jpg",
        subtitles: [
            { text: "当三叶进入我的身体时，她终于能体验向往已久的东京。", type: "narration" },
            { text: "咖啡馆、时装店、繁忙的街道...", type: "narration" },
            { text: "她帮我打工的意式餐厅里，表现得比我还要出色。", type: "inner" },
            { text: "我在她的身体里时，也试着帮她变得更自信。", type: "narration" },
            { text: "用男生的气质，帮柔弱的三叶在学校更受欢迎。", type: "narration" },
            { text: "我们都在对方的世界里，留下了自己的痕迹。", type: "inner" }
        ]
    },
    {
        id: 6,
        title: "第六章：约会计划",
        bg: "image/c5.jpg",
        subtitles: [
            { text: "我对打工前辈奥寺美纪一直有好感。", type: "inner" },
            { text: "三叶知道后，竟然主动帮我安排约会。", type: "narration" },
            { text: "\"我帮你约她了！\"", type: "dialogue" },
            { text: "\"这可是我在东京的时候做的事哦！\"", type: "dialogue" },
            { text: "她的热情让我有些不知所措...", type: "inner" },
            { text: "但我不知道，她在这背后藏着自己的心事。", type: "narration" }
        ]
    },
    {
        id: 7,
        title: "第七章：彗星之日",
        bg: "image/name5.jpg",
        subtitles: [
            { text: "约会的那天，迪亚马特彗星即将划过天空。", type: "narration" },
            { text: "三叶留言说：约会结束后正好能看到彗星。", type: "narration" },
            { text: "这句话让我觉得有些奇怪...", type: "inner" },
            { text: "约会时，我看到了一张飞弹市的照片，唤起了模糊的记忆。", type: "narration" },
            { text: "我决定打电话给三叶...", type: "inner" },
            { text: "但是电话打不通。", type: "narration" },
            { text: "从那天起，我再也没有和三叶交换过身体。", type: "inner" }
        ]
    },
    {
        id: 8,
        title: "第八章：失联谜团",
        bg: "image2/i18.jpg",
        subtitles: [
            { text: "几天过去了，三叶没有任何消息。", type: "narration" },
            { text: "手机上的留言也消失了...", type: "inner" },
            { text: "我试着拨打那个号码，却始终无法接通。", type: "inner" },
            { text: "难道...这一切真的只是我的梦？", type: "inner" },
            { text: "我心中充满了疑问和不安。", type: "narration" },
            { text: "我必须去找她。", type: "inner" }
        ]
    },
    {
        id: 9,
        title: "第九章：飞驒之旅",
        bg: "image2/i30.jpg",
        subtitles: [
            { text: "我凭着记忆画下了糸守町的素描。", type: "narration" },
            { text: "和同学藤井司、前辈奥寺一起前往飞驒。", type: "narration" },
            { text: "四处询问当地人，终于找到了线索。", type: "narration" },
            { text: "\"糸守町？那个地方三年前就毁了...\"", type: "dialogue" },
            { text: "我不敢相信这这句话。", type: "inner" },
            { text: "毁掉了？三年前？", type: "inner" }
        ]
    },
    {
        id: 10,
        title: "第十章：破碎真相",
        bg: "image/name6.jpg",
        subtitles: [
            { text: "拉面店老板带我来到了废弃的糸守町。", type: "narration" },
            { text: "眼前的景象让我震惊——", type: "inner" },
            { text: "小镇已经被陨石摧毁大半，变成一片废墟。", type: "narration" },
            { text: "三年前，彗星分裂出的碎片击中了这里...", type: "narration" },
            { text: "超过500名镇民不幸罹难。", type: "narration" },
            { text: "我在遇难者名单中，看到了\"宫水三叶\"的名字。", type: "inner" }
        ]
    },
    {
        id: 11,
        title: "第十一章：遗忘之痛",
        bg: "image2/i33.jpg",
        subtitles: [
            { text: "我打开手机，三叶的留言一条条消失。", type: "narration" },
            { text: "我对她的记忆也在逐渐模糊...", type: "inner" },
            { text: "我到底...在寻找谁？", type: "inner" },
            { text: "脑海中只剩下一个模糊的身影。", type: "narration" },
            { text: "我忘记了她的名字，忘记了我们的约定。", type: "inner" },
            { text: "但我知道，我必须去御神体。", type: "inner" }
        ]
    },
    {
        id: 12,
        title: "第十二章：神社之路",
        bg: "image2/i38.jpg",
        subtitles: [
            { text: "我记得三叶的外祖母说过——", type: "narration" },
            { text: "\"产灵可以连结人与时间。\"", type: "dialogue" },
            { text: "我留下了字条，独自前往御神体。", type: "narration" },
            { text: "山路崎岖，但我没有停下。", type: "inner" },
            { text: "我想起了三叶曾带我去过的地方...", type: "inner" },
            { text: "在御神体前，我发现了三叶留下的口嚼酒。", type: "narration" }
        ]
    },
    {
        id: 13,
        title: "第十三章：口嚼酒",
        bg: "image/name7.jpg",
        subtitles: [
            { text: "外祖母说：进入人体的事物可以与时间形成连结。", type: "narration" },
            { text: "我喝下了三年前三叶制作的口嚼酒...", type: "inner" },
            { text: "一阵眩晕袭来，过去的记忆如潮水般涌现。", type: "narration" },
            { text: "我看到了三叶的人生历程...", type: "inner" },
            { text: "她的欢笑、她的泪水、她的憧憬...", type: "narration" },
            { text: "然后——", type: "narration" },
            { text: "我再次与三年前的三叶交换了身体。", type: "inner" }
        ]
    },
    {
        id: 14,
        title: "第十四章：再次交换",
        bg: "image2/i41.jpg",
        subtitles: [
            { text: "这一次，我进入了彗星坠落前的三叶体内。", type: "narration" },
            { text: "秋日祭典即将举行，彗星将在当晚坠落。", type: "narration" },
            { text: "我必须阻止这场灾难。", type: "inner" },
            { text: "我向三叶的朋友们说明了情况...", type: "narration" },
            { text: "我们开始策划避难行动。", type: "narration" },
            { text: "一定要让镇民们躲过这场浩劫。", type: "inner" }
        ]
    },
    {
        id: 15,
        title: "第十五章：黄昏之时",
        bg: "image2/i45.jpg",
        subtitles: [
            { text: "黄昏时分，我在御神体的山顶醒来。", type: "narration" },
            { text: "我发现自己又回到了泷的身体。", type: "inner" },
            { text: "而在那里——", type: "narration" },
            { text: "三叶正站在我面前。", type: "inner" },
            { text: "黄昏之时，是能够见到不该见到的人的时刻...", type: "narration" },
            { text: "我们终于，面对面相见了。", type: "inner" }
        ]
    },
    {
        id: 16,
        title: "第十六章：书写名字",
        bg: "image2/i50.jpg",
        subtitles: [
            { text: "我们短暂地交谈，彼此确认对方的存在。", type: "narration" },
            { text: "\"为了不再忘记，我们互相写下名字吧。\"", type: "dialogue" },
            { text: "我正要在三叶手上写下我的名字...", type: "inner" },
            { text: "黄昏结束了，她消失在我眼前。", type: "narration" },
            { text: "我惊慌地看向自己的手——", type: "inner" },
            { text: "上面写着的不是她的名字，而是——", type: "narration" },
            { text: "\"喜欢你\"", type: "dialogue" }
        ]
    },
    {
        id: 17,
        title: "第十七章：拯救小镇",
        bg: "image2/i51.jpg",
        subtitles: [
            { text: "恢复真身的三叶，继续执行避难计划。", type: "narration" },
            { text: "她说服父亲以\"演习\"名义疏散镇民。", type: "narration" },
            { text: "彗星分裂的碎片开始坠落...", type: "narration" },
            { text: "镇民们在高中避难所躲过了灾难。", type: "narration" },
            { text: "三叶的奔跑，改变了命运的轨迹。", type: "narration" },
            { text: "糸守町的人们，活下来了。", type: "inner" }
        ]
    },
    {
        id: 18,
        title: "尾声：重逢",
        bg: "image/name7.jpg",
        subtitles: [
            { text: "五年后，我已经进入社会工作。", type: "narration" },
            { text: "那段记忆变得模糊，但我总是在寻找某人。", type: "inner" },
            { text: "在东京的地铁上，我数次与她擦肩而过...", type: "narration" },
            { text: "直到有一天——", type: "narration" },
            { text: "我们隔着不同的车厢，看见了彼此。", type: "inner" },
            { text: "我们下车，在阶梯上相遇。", type: "narration" },
            { text: "眼泪止不住地滑落。", type: "inner" },
            { text: "\"我是不是在哪里见过你？\"", type: "dialogue" },
            { text: "\"我也是。\"", type: "dialogue" },
            { text: "我们笑着问对方——", type: "narration" },
            { text: "\"你的名字是？\"", type: "dialogue" }
        ]
    }
];

// 状态变量
let currentScene = 0;
let currentSubtitle = 0;
let isTransitioning = false;

// DOM 元素
const introScreen = document.getElementById('intro-screen');
const startBtn = document.getElementById('start-btn');
const sceneContainer = document.getElementById('scene-container');
const sceneBg = document.getElementById('scene-bg');
const sceneTitle = document.getElementById('scene-title');
const subtitleBox = document.getElementById('subtitle-box');
const subtitleText = document.getElementById('subtitle-text');
const continueBtn = document.getElementById('continue-btn');
const progressContainer = document.getElementById('progress-container');
const sceneIndicator = document.getElementById('scene-indicator');
const progressFill = document.getElementById('progress-fill');
const backBtn = document.getElementById('back-btn');
const endScreen = document.getElementById('end-screen');
const replayBtn = document.getElementById('replay-btn');

// 开始按钮事件
startBtn.addEventListener('click', () => {
    introScreen.classList.add('hidden');
    sceneContainer.classList.remove('hidden');
    loadScene(0);
});

// 继续按钮事件
continueBtn.addEventListener('click', () => {
    if (isTransitioning) return;
    advanceSubtitle();
});

// 返回按钮事件
backBtn.addEventListener('click', () => {
    if (confirm('确定要退出吗？')) {
        location.href = 'index.html';
    }
});

// 重播按钮事件
replayBtn.addEventListener('click', () => {
    currentScene = 0;
    currentSubtitle = 0;
    endScreen.classList.add('hidden');
    sceneContainer.classList.remove('hidden');
    loadScene(0);
});

// 加载场景
function loadScene(index) {
    if (index >= scenes.length) {
        showEndScreen();
        return;
    }

    isTransitioning = true;
    const scene = scenes[index];

    // 淡出当前场景
    sceneBg.classList.add('fade-out');
    sceneTitle.classList.remove('show');

    setTimeout(() => {
        // 切换背景和标题
        sceneBg.style.backgroundImage = `url('${scene.bg}')`;
        sceneTitle.textContent = scene.title;

        // 淡入新场景
        sceneBg.classList.remove('fade-out');
        sceneBg.classList.add('fade-in');

        // 显示标题
        setTimeout(() => {
            sceneTitle.classList.add('show');
        }, 500);

        // 显示第一条字幕
        currentSubtitle = 0;
        setTimeout(() => {
            showSubtitle(scene.subtitles[currentSubtitle]);
            isTransitioning = false;
        }, 1500);

        // 更新进度
        updateProgress(index);

    }, 1000);
}

// 显示字幕
function showSubtitle(subtitle) {
    subtitleText.textContent = subtitle.text;
    subtitleText.className = subtitle.type;
}

// 推进字幕
function advanceSubtitle() {
    const scene = scenes[currentScene];
    currentSubtitle++;

    if (currentSubtitle >= scene.subtitles.length) {
        // 当前场景所有字幕读完，切换下一场景
        currentScene++;
        loadScene(currentScene);
    } else {
        showSubtitle(scene.subtitles[currentSubtitle]);
    }
}

// 更新进度
function updateProgress(index) {
    const total = scenes.length;
    sceneIndicator.textContent = `${index + 1} / ${total}`;
    const percent = ((index + 1) / total) * 100;
    progressFill.style.width = `${percent}%`;
}

// 显示结束画面
function showEndScreen() {
    sceneContainer.classList.add('hidden');
    endScreen.classList.remove('hidden');
}

// 键盘快捷键
document.addEventListener('keydown', (e) => {
    if (sceneContainer.classList.contains('hidden')) return;
    if (isTransitioning) return;

    if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowRight') {
        advanceSubtitle();
    }
    if (e.key === 'Escape') {
        backBtn.click();
    }
});
