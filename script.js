// https://zingmp3.vn/bai-hat/Pho-Cu-Con-Anh-Quinn-Chilly/ZWD88EWA.html ZHxHykHcDHcHXcFtHyDGZHyZCCBFCdHsh
// view-source:https://mp3.zing.vn/bai-hat/abc/xyz.html
// ctrl+F data-xml



let tracks = [
	{
		"url": "https://zingmp3.vn/bai-hat/Cau-Vong-Sau-Mua-Cao-Thai-Son/ZWZ9Z9UO.html",
		"key": "LHJGykmaBNSzHgNTHybHkmyZgazaQFxFD"
	},
	{
		"url": "https://zingmp3.vn/bai-hat/Hay-De-Anh-Yeu-Em-Lan-Nua-The-Men/ZWZA6EC0.html",
		"key": "knxmyLmNBcLWLnStHTDHkHtkgCaaQLguz"
	},
	{
		"url": "https://zingmp3.vn/bai-hat/Ai-That-Long-Thuong-Em-Ly-Tuan-Kiet/ZWAF6AUE.html",
		"key": "knxHyLHaRBJSWFCymtbnZntkCXdBzERdQ"
	},
	{
		"url": "https://zingmp3.vn/bai-hat/Tim-Em-Trong-Mo-Chi-Dan/ZWAEZBCB.html",
		"key": "ZHJHykmsidkpFsWyHyFGZHtZCCdBAuBsb"
	},
	{
		"url": "https://zingmp3.vn/bai-hat/Het-Thuong-Can-Nho-Duc-Phuc/ZWAEE7F7.html",
		"key": "ZnxHtkHsRVpLLQEtHyFnLmykhNSJASEuB"
	},
	{
		"url": "https://zingmp3.vn/bai-hat/Cu-Voi-Vang-Minh-Vuong-M4U-ACV/ZWFC6O86.html",
		"key": "knJmyZmcSAFunhDymtFHZnyZChdVSRkgW"
	},
	{
		"url": "https://zingmp3.vn/bai-hat/Thang-Tu-La-Loi-Noi-Doi-Cua-Em-Ha-Anh-Tuan/ZW780B6C.html",
		"key": "LHJmtkHapNQWsWhtHTDmkHykXCddzcSni"
	},
	{
		"url": "https://zingmp3.vn/bai-hat/Loi-Nguyen-Akira-Phan-Vu-Ngoc-Diep/ZWZ9ZZ70.html",
		"key": "LmxGTknsdazBnJJyHyDHLGtkhhVBAcbSh"
	},
	{
		"url": "https://zingmp3.vn/bai-hat/Em-Hat-Ai-Nghe-Orange/ZUU8FEI8.html",
		"key": "LmcHyZZmXFFhWcltnTFHLHTkhhdvXFgaS"
	},
	{
		"url": "https://zingmp3.vn/bai-hat/Cho-Qua-Lau-Le-Bao-Binh/ZZDO87CU.html",
		"key": "LHJmTZZdvHJdmkFyHtbHLntLCQpCWkEpb"
	},
	{
		"url": "https://zingmp3.vn/bai-hat/Chieu-Thu-Hoa-Bong-Nang-DatKaa/ZOOI7Z87.html",
		"key": "ZHxGyZHJsRnNHsRyHybmZGtZXhBbCbiQN"
	},
	{
		"url": "https://zingmp3.vn/bai-hat/Tinh-Yeu-Co-Con-Ton-Tai-Khai-Dang/ZZ90FZWC.html",
		"key": "kGxHTLLFsaFmLmJynybnLmyZCXVvCFaFs"
	},
	{
		"url": "https://zingmp3.vn/bai-hat/So-Ta-Mat-Nhau-Chau-Khai-Phong-ACV/ZOFEOCIO.html",
		"key": "LncmyZZGLBbsFQkTHyFHZmTLXQphWDzWh"
	},
	{
		"url": "https://zingmp3.vn/bai-hat/Tha-La-Khai-Dang/ZZ8D9UZI.html",
		"key": "ZmJmyZkbNzRxNHWynybGZmyZCWpCQDzah"
	},
	{
		"url": "https://zingmp3.vn/bai-hat/Nguoi-Yeu-Toi-Lanh-Lung-Sat-Da-Mr-Siro/ZZ6IW7OU.html",
		"key": "LnJHykLFAQJNLJctGtFnZmtkCpphQFzRS"
	},
	{
		"url": "https://zingmp3.vn/bai-hat/Yeu-Nham-Nguoi-Khac-Viet/ZW9BUIEO.html",
		"key": "LncmyZnaxmhdlQRymtFmZntZhWphpvWkk"
	},
	{
		"url": "https://zingmp3.vn/bai-hat/Nhuong-Dieu-Uoc-Cho-Em-Cao-Tung-Anh/ZW679FWD.html",
		"key": "LHJmTkmszXauSXEyGtDnLHtLgWpCQvpQs"
	},
	{
		"url": "https://zingmp3.vn/bai-hat/Buon-Cua-Anh-K-ICM-Dat-G-Masew/ZW8WD9BE.html",
		"key": "LGJGyZnNhzXdidAymyDmkGyZhWphQbpNB"
	}
]

let indexSong = 0,
	playStatus = "play_arrow",	// play_arrow | pause
	loopStatus = "repeat",		// repeat | repeat_one | shuffle
	thumbFolder = "https://hiepdeep.github.io/cdn/aPlayer/zingMp3/thumb/",
	createAudio = document.createElement("audio");

if (sessionStorage.getItem("indexSong")) {
	indexSong = sessionStorage.getItem("indexSong");
}

if (sessionStorage.getItem("loopStatus")) {
	loopStatus = sessionStorage.getItem("loopStatus");
}

createAudio.setAttribute("id", "myAudio");
createAudio.setAttribute("preload", "");
document.body.appendChild(createAudio);

let id_playList = "";
let thumbSrc = "";
for (let i = 0; i < tracks.length; i++) {
	let idSong = tracks[i].url;
	id_playList
		+= "<div id='song'>"
		+ "<div id='thumb'></div>"
		+ "<div class='metaSong'>"
		+ "<div id='title'></div>"
		+ "<div id='singer'></div>"
		+ "</div>"
		+ "<button class='btn material-icons play'>play_arrow</button>"
		+ "</div>";
}
aPlaylist.innerHTML = id_playList;

////////////////////////////////////////////////////////////////////////////////////////

for (let i = 0; i < tracks.length; i++) {
	const apiSong = `https://mp3.zing.vn/xhr/media/get-source?type=audio&key=${tracks[i].key}`;
	async function getapi(url) {
		const response = await fetch(url);
		var data = await response.json();
		thumb[i].style.setProperty("--src-thumb", "url(" + data.data.thumbnail + ")");
		title[i].innerHTML = `${data.data.name}`;
		// singer[i].innerHTML = `${data.data.artists_names}`;
	}
	getapi(apiSong);
}

////////////////////////////////////////////////////////////////////////////////////////

for (let i = 0; i < tracks.length; i++) {
	const apiSong = `https://mp3.zing.vn/xhr/media/get-info?type=audio&id=${regId(tracks[i].url)}`; // ZZDI9B7U ZZBAFF60
	async function getapi(url) {
		const response = await fetch(url);
		var data = await response.json();
		var sgs = "";
		for (let i = 1; i < data.data.artists.length; i++) {
			sgs += `, <a href='https://zingmp3.vn${data.data.artists[i].link}' target='_blank'>${data.data.artists[i].name}</a>`;
		}
		singer[i].innerHTML = `<a href='https://zingmp3.vn${data.data.artists[0].link}' target='_blank'>${data.data.artists[0].name}</a>` + sgs;
	}
	getapi(apiSong);
}

////////////////////////////////////////////////////////////////////////////////////////

init(indexSong);
scrollWin(indexSong);
session(indexSong);
session(loopStatus);

const btnPlayList = document.querySelectorAll(".play");
song[indexSong].setAttribute("class", "song-playing");
for (let l = 0; l < btnPlayList.length; l++) {
	btnPlayList[l].addEventListener("click", function () {
		indexSong = l;
		init(indexSong);
		scrollWin(indexSong);
		session(indexSong);
		myAudio.currentTime = 0;
		myAudio.play();
		playStatus = "pause";
		playState.textContent = "pause";
		for (let a = 0; a < btnPlayList.length; a++) {
			song[a].classList.remove("song-playing");
			song[l].setAttribute("class", "song-playing");
			btnPlayList[a].textContent = "play_arrow";
			btnPlayList[l].textContent = "pause";
		}
	});
}

const real_Time = setInterval(realTime, 0);
function realTime() {
	const { duration, currentTime } = myAudio;
	durationBar.max = duration;
	durationBar.setAttribute("value", currentTime);
	durationBar.value = currentTime;
	durationBar.style.backgroundSize = (currentTime / duration) * 100 + "% 100%";
	crtTime.textContent = formatTimer(currentTime);
	if (!duration) {
		drnTime.textContent = "00:00";
	} else {
		drnTime.textContent = formatTimer(duration);
	}
}

durationBar.addEventListener("input", () => {
	myAudio.currentTime = durationBar.value;
});

myAudio.addEventListener("ended", () => {
	if (loopStatus === "repeat") {
		indexSong += 1;
		if (indexSong >= tracks.length) {
			indexSong = 0;
		}
	}
	else if (loopStatus === "shuffle") {
		indexSong = Math.floor(Math.random() * (tracks.length));
	}
	init(indexSong);
	scrollWin(indexSong);
	session(indexSong);
	myAudio.play();
	for (let a = 0; a < btnPlayList.length; a++) {
		song[a].classList.remove("song-playing");
		song[indexSong].setAttribute("class", "song-playing");
		btnPlayList[a].textContent = "play_arrow";
		btnPlayList[indexSong].textContent = "pause";
	}
});

const playState = document.getElementById("play"),
	prevState = document.getElementById("prev"),
	nextState = document.getElementById("next"),
	muteState = document.getElementById("mute"),
	loopState = document.getElementById("loop");

playState.addEventListener("click", () => {
	if (playStatus === "play_arrow") {
		myAudio.play();
		playStatus = "pause";
		playState.textContent = playStatus;
		btnPlayList[indexSong].textContent = "pause";
	}
	else {
		myAudio.pause();
		playStatus = "play_arrow";
		playState.textContent = playStatus;
		btnPlayList[indexSong].textContent = "play_arrow";
	}
});

prevState.addEventListener("click", () => {
	if (myAudio.currentTime >= 60) {
		myAudio.pause();
		myAudio.currentTime = 0;
		playStatus = "play_arrow";
		playState.textContent = playStatus;
	}
	else {
		changSong(-1);
	}
});

nextState.addEventListener("click", () => {
	changSong(1);
});

muteState.addEventListener("input", () => {
	const setValue = muteState.value;
	myAudio.volume = setValue;
	muteState.style.backgroundSize = setValue * 100 + '% 100%';
	if (setValue <= 0.5) {
		muteIcon.innerHTML = "volume_down";
		if (setValue == 0) {
			muteIcon.textContent = "volume_off";
		}
	}
	else {
		muteIcon.textContent = "volume_up";
	}
});

loopState.addEventListener("click", () => {
	if (loopStatus === "repeat") {
		loopStatus = "repeat_one";
		loopState.textContent = loopStatus;
	}
	else if (loopStatus === "repeat_one") {
		loopStatus = "shuffle";
		loopState.textContent = loopStatus;
	}
	else if (loopStatus === "shuffle") {
		loopStatus = "repeat";
		loopState.textContent = loopStatus;
	}
	session(loopStatus);
});

function regId(e) {
	let songId = e;
	return songId.split("\/")[5].split("\.")[0];
}

function changSong(e) {
	if (e === -1) {
		indexSong--;
		if (indexSong < 0) {
			indexSong = tracks.length - 1;
		}
	}
	else if (e === 1) {
		indexSong++;
		if (indexSong >= tracks.length) {
			indexSong = 0;
		}
	}
	init(indexSong);
	scrollWin(indexSong);
	session(indexSong);
	myAudio.play();
	playState.textContent = "pause";
	playStatus = "pause";
	for (let a = 0; a < btnPlayList.length; a++) {
		song[a].classList.remove("song-playing");
		song[indexSong].setAttribute("class", "song-playing");
		btnPlayList[a].textContent = "play_arrow";
		btnPlayList[indexSong].textContent = "pause";
	}
}

function init(indexSong) {
	myAudio.setAttribute("src", "http://api.mp3.zing.vn/api/streaming/audio/" + regId(tracks[indexSong].url) + "/320");
	myAudio.currentTime = 0;
}

function scrollWin(indexSong) {
	aPlaylist.scrollTo(0, indexSong * 72 - 72 * 2 - 12);
}

function formatTimer(number) {
	const minutes = Math.floor(number / 60);
	const seconds = Math.floor(number - minutes * 60);
	return `${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
}

function session(e) {
	if (e === indexSong) {
		sessionStorage.setItem("indexSong", indexSong);
	}
	else if (e === loopStatus) {
		sessionStorage.setItem("loopStatus", loopStatus);
	}
}