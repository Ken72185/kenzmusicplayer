// DOM Elements
const homePage = document.getElementById('homePage');
const songDetailPage = document.getElementById('songDetailPage');
const playerPage = document.getElementById('playerPage');
const songListElement = document.getElementById('songList');

const backToHomeFromDetailBtn = document.getElementById('backToHomeFromDetailBtn');
const backToHomeBtn = document.getElementById('backToHomeBtn'); // Tombol kembali dari player ke home
const bodyElement = document.body;

const backgroundVideoContainer = document.querySelector('.video-background-container');
const backgroundVideo = document.getElementById('backgroundVideo');

// Elemen untuk Halaman Detail Lagu (tidak akan langsung digunakan saat klik lagu, tapi tetap di-load)
const detailAlbumArt = document.getElementById('detailAlbumArt');
const detailTrackTitle = document.getElementById('detailTrackTitle');
const detailTrackArtist = document.getElementById('detailTrackArtist');
const detailAlbumName = document.getElementById('detailAlbumName');
const playFromDetailBtn = document.getElementById('playFromDetailBtn'); // Tombol play di halaman detail

const audioPlayer = document.getElementById('audioPlayer');
const albumArtPlayer = document.getElementById('albumArt');
const playerTrackTitle = document.getElementById('playerTrackTitle');
const playerTrackArtist = document.getElementById('playerTrackArtist');
const lyricsContainer = document.getElementById('lyricsContainer');

const playerProgressBarContainer = document.getElementById('playerProgressBarContainer');
const playerProgressBar = document.getElementById('playerProgressBar');
const playerCurrentTime = document.getElementById('playerCurrentTime');
const playerTotalDuration = document.getElementById('playerTotalDuration');

const playerPrevBtn = document.getElementById('playerPrevBtn');
const playerPlayPauseBtn = document.getElementById('playerPlayPauseBtn');
const playerNextBtn = document.getElementById('playerNextBtn');
const playerRepeatBtn = document.getElementById('playerRepeatBtn');
const playerShuffleBtn = document.getElementById('playerShuffleBtn');
const playerVolumeSlider = document.getElementById('playerVolumeSlider');
const playerSpeedSlider = document.getElementById('playerSpeedSlider'); // Tambahkan ini
const currentSpeedDisplay = document.getElementById('currentSpeedDisplay'); // Tambahkan ini

// App State
let songs = [
    {
        id: 1,
        title: "Consume",
        artist: "Chase Atlantic",
        album: "Beauty in Death",
        albumArtUrl: "https://tse3.mm.bing.net/th?id=OIP.VwivM--7Xx_SmgsqXBLi8AAAAA&pid=Api&P=0&h=220",
        audioSrc: "song/consume.mp3",
        videoBgSrc: "video/consume.mp4", // Path video background khusus lagu ini
        // Lirik dengan timestamp dalam detik
        lyrics: [
            { time: 0.8, text: "She said, Careful, or you'll lose it" },
            { time: 4, text: "But, girl, I'm only human," },
            { time: 7, text: "And I know there's a blade where your heart is" },
            { time: 10, text: "And you know how to use it" },
            { time: 13, text: "And you can take my flesh if you want girl" },
            { time: 16, text: "But, baby, don't abuse it (Calm down)" },
            { time: 19, text: "These voices in my head screaming, Run now (Don't run)" },
            { time: 22, text: "I'm praying that they're human" },
            { time: 25, text: "Please understand that I'm trying my hardest" },
            { time: 28, text: "My head's a mess, but I'm trying regardless" },
            { time: 31, text: "Anxiety is one hell of a problem" },
            { time: 34, text: "She's latching onto me, I can't resolve it" },
            { time: 37, text: "It's not right, it's not fair, it's not fair" },
            { time: 41.5, text: "It's not fair, it's not fair, it's not fair" },
            { time: 47, text: "Oh, no, no, no, ooh-ooh" },
        ]
    },
    {
        id: 2,
        title: "Perfect",
        artist: "Ed Sheeran",
        album: "÷ (Divide)",
        albumArtUrl: "https://tse4.mm.bing.net/th?id=OIP.TjS4z1jJTsl6K3-ADIXFywHaEK&pid=Api&P=0&h=220",
        audioSrc: "song/Ed Sheeran - Perfect.mp3",
        videoBgSrc: "video/perfect_bg.mp4", // Path video background khusus lagu ini
        // Lirik dengan timestamp dalam detik
        lyrics: [
            { time: 2.9 , text: "I found a love for me" },
            { time: 10.6, text: "Oh, darlin, just dive right in and follow my lead" },
            { time: 18, text: "I found a girl, beautiful and sweet" },
            { time: 25, text: "I never knew you were the someone waiting for me" },
            { time: 32, text: "'Cause we were just kids when we fell in love" },
            { time: 36.7, text: "Not knowin' what it was" },
            { time: 40.5, text: "I will not give you up this time" },
            { time: 48, text: "But, darlin', just kiss me slow" },
            { time: 51.6, text: "Your heart is all I own" },
            { time: 55.9, text: "And in your eyes, you're holdin' mine" },
            { time: 62.3, text: "Baby, I'm dancing in the dark with you between my arms" },
            { time: 73.6, text: "Barefoot on the grass, listening to our favorite song" },
            { time: 80.9, text: "When you said you looked a mess, I whispered underneath my breath" },
            { time: 88, text: "But you heard it, darling, you look perfect tonight" }
        ]
    },    
    {
        id: 3,
        title: "Unconditionally",
        artist: "Katy Perry",
        album: "Prism",
        albumArtUrl: "https://i.ytimg.com/vi/4NGVxU0qhZ8/maxresdefault.jpg",
        audioSrc: "song/Katy Perry - Unconditionally.mp3",
        videoBgSrc: "video/unconditionally_bg.mp4", // Path video background khusus lagu ini
        // Lirik dengan timestamp dalam detik
        lyrics: [
            { time: 7.1, text: "Oh no, did I get too close?" },
            { time: 12, text: "Oh, did I almost see what's really on the inside?" },
            { time: 22.6, text: "All your insecurities" },
            { time: 27.3, text: "All the dirty laundry" },
            { time: 30.3, text: "Never made me blink one time" },
            { time: 36.5, text: "Unconditional, unconditionally" },
            { time: 44, text: "I will love you unconditionally" },
            { time: 51, text: "There is no fear now" },
            { time: 55, text: "Let go and just be free" },
            { time: 58.6, text: "I will love you unconditionally" },
            { time: 67, text: "So come just as you are to me" },
            { time: 71, text: "Don't need apologies" },
            { time: 74.9, text: "Know that you are worthy" },
            { time: 82, text: "I'll take your bad days with your good" },
            { time: 86.5, text: "Walk through the storm, I would" },
            { time: 90, text: "I'd do it all because I love you" },
            { time: 96, text: "I love you" },
            { time: 99.5, text: "Unconditional, unconditionally" },
            { time: 107, text: "I will love you unconditionally" },
            { time: 114, text: "There is no fear now" },
            { time: 118, text: "Let go and just be free" },
            { time: 122, text: "I will love you unconditionally" },
            { time: 129.5, text: "So open up your heart and just let it begin" },
            { time: 133, text: "Open up your heart and just let it begin" },
            { time: 136.9, text: "Open up your heart and just let it begin" },
            { time: 141, text: "Open up your heart" },            
            { time: 145, text: "Acceptance is the key to be" },
            { time: 150.6, text: "To be truly free" },
            { time: 154, text: "Will you do the same for me?" },
            { time: 162.5, text: "Unconditional, unconditionally" },
            { time: 170, text: "I will love you unconditionally" },
            { time: 177.8, text: "There is no fear now" },
            { time: 181, text: "Let go and just be free" },
            { time: 185, text: "I will love you unconditionally" },
            { time: 200, text: "I will love you (Unconditionally)" },
            { time: 207.8, text: "I will love you" },
            { time: 215, text: "I will love you unconditionally" }
        ]
    },
    {
        id: 4,
        title: "Rewrite the Stars",
        artist: "James Arthur & Anne-Marie",
        album: "The Greatest Showman: Reimagined",
        albumArtUrl: "https://i.ytimg.com/vi/BqGCJUXEqxQ/maxresdefault.jpg",
        audioSrc: "song/Rewrite The Stars - James Arthur feat. Anne Marie.mp3",
        videoBgSrc: "video/rewrite_the_stars_bg.mp4",
        lyrics: [
            { time: 2.0, text: "You know I want you" },
            { time: 4.0, text: "It's not a secret I try to hide" },
            { time: 8.0, text: "You know you want me" },
            { time: 12.0, text: "So don't keep sayin' our hands are tied" },
            { time: 17.0, text: "You claim it's not in the cards" },
            { time: 18.0, text: "And fate is pullin' you miles away and out of reach from me" },
            { time: 24.0, text: "But you're here in my heart" },
            { time: 25.8, text: "So who can stop me if I decide that you're my destiny?" },
            { time: 33.0, text: "What if we rewrite the stars?" },
            { time: 38.0, text: "Say you were made to be mine" },
            { time: 42.0, text: "Nothin' could keep us apart" },
            { time: 46.0, text: "You'd be the one I was meant to find" },
            { time: 50.0, text: "It's up to you and it's up to me" },
            { time: 54.0, text: "No one can say what we get to be" },
            { time: 58.0, text: "So why don't we rewrite the stars?" },
            { time: 61.0, text: "Maybe the world could be ours tonight" },
            { time: 66.0, text: "Ah-oh (No, no, no, no)" },
            { time: 70.0, text: "Ah-oh (Mm)" },
            { time: 74.0, text: "You think it's easy" },
            { time: 78.0, text: "You think I don't wanna run to you, yeah" },
            { time: 82.0, text: "But there are mountains (There are mountains)" },
            { time: 85.0, text: "And there are doors that we can't walk through" },
            { time: 89.0, text: "I know you're wonderin' why" },
            { time: 91.0, text: "Because we're able to be just you and me within these walls" },
            { time: 97.0, text: "But when we go outside" },
            { time: 99.0, text: "You're gonna wake up and see that it was hopeless after all" },
            { time: 107.0, text: "No one can rewrite the stars" },
            { time: 111.0, text: "How can you say you'll be mine?" },
            { time: 115.0, text: "Everything keeps us apart" },
            { time: 118.0, text: "And I'm not the one you were meant to find" },
            { time: 122.0, text: "It's not up to you, it's not up to me" },
            { time: 126.0, text: "When everyone tells us what we can be" },
            { time: 130.0, text: "And how can we rewrite the stars?" },
            { time: 134.0, text: "Say that the world can be ours tonight" },
            { time: 139.0, text: "All I want is to fly with you" },
            { time: 143.0, text: "All I want is to fall with you" },
            { time: 147.0, text: "So just give me all of you" },
            { time: 151, text: "It feels impossible" },
            { time: 153, text: "It's not impossible" },
            
            { time: 155.0, text: "Say that it's possible" },
            { time: 158, text: "How do we rewrite the stars?" },
            { time: 162.0, text: "Say you were made to be mine" },
            { time: 166.0, text: "And nothin' could keep us apart" },
            { time: 170.0, text: "'Cause you are the one I was meant to find" },
            { time: 174.0, text: "It's up to you and it's up to me" },
            { time: 177.0, text: "No one could say what we get to be" },
            { time: 181.0, text: "And why don't we rewrite the stars?" },
            { time: 185.0, text: "Changin' the world to be ours" },
            { time: 191.0, text: "Ah-oh (No, no, no, no)" },
            { time: 194.0, text: "Ah-oh (Mm)" },
            { time: 198.0, text: "You know I want you" },
            { time: 202.0, text: "It's not a secret I try to hide" },
            { time: 206.0, text: "But I can't have you" },
            { time: 209.0, text: "We're bound to break and my hands are tied" }
            ]
        
    },
    {
        id: 5,
        title: "Somebody's Pleasure",
        artist: "Aziz Hedra", 
        album: "Unreleased",
        albumArtUrl: "https://tse3.mm.bing.net/th?id=OIP.5fDFhJU8ZYGRlPD4ffPlgAHaHa&pid=Api&P=0&h=220", 
        audioSrc: "song/Somebodys Pleasure.mp3",
        videoBgSrc: "video/somebodys_pleasure_bg.mp4",
        lyrics: [
            { time: 17.0, text: "I've been too busy ignoring and hiding" },
            { time: 22.5, text: "About what my heart actually say" },
            { time: 33.0, text: "Stay awake while I'm drowning on my thoughts" },
            { time: 40.0, text: "Sometimes a happiness is just a happiness" },
            { time: 52.0, text: "I've never been enjoying my serenity" },
            { time: 57.0, text: "Even if I've got a lot of company" },
            { time: 63.0, text: "That makes me happy" },
            { time: 67.0, text: "Soul try to figure it out" },
            { time: 71.0, text: "From where I've been escaping" },
            { time: 76.0, text: "Running to end all the sin" },
            { time: 80.0, text: "Get away from the pressure" },
            { time: 84.0, text: "Wondering to get a love that is so pure" },
            { time: 93.0, text: "Gotta have to always make sure" },
            { time: 97.0, text: "That I'm not just somebody's pleasure" },
            { time: 104.6, text: "I always pretending and lying" },
            { time: 111.0, text: "I got used to feel empty" },
            { time: 113.0, text: "'Cause all I got is unhappy" },
            { time: 117.0, text: "Happiness, can't I get happiness?" },
            { time: 122.0, text: "I've never been enjoying my serenity" },
            { time: 127.0, text: "Even if I've got a lot of company" },
            { time: 133.0, text: "That makes me happy" },
            { time: 139.0, text: "And I don't even feel my own pain" },
            { time: 144.0, text: "Whatever when the storms pouring rain" },
            { time: 150.0, text: "Feels like a wind" },
            { time: 154.0, text: "Soul try to figure it out" },
            { time: 158.0, text: "From where I've been escaping" },
            { time: 163, text: "Running to end all the sin" },
            { time: 167.0, text: "Get away from the pressure" },
            { time: 171.0, text: "Wondering to get a love that is so pure" },
            { time: 180.0, text: "Gotta have to always make sure" },
            { time: 184.0, text: "That I'm not just somebody's pleasure" },
            { time: 191.0, text: "I hold imagination" },
            { time: 195.0, text: "Cover all of the sadness" },
            { time: 200.0, text: "I don't feel something special" },
            { time: 203.0, text: "Turn off the phone to get some special" },
            { time: 208.0, text: "Never thought I'd living in true" },
            { time: 212.0, text: "The truth that has been so blue" },
            { time: 217.0, text: "It was in a blink of an eye" },
            { time: 221.0, text: "Find a way how to say goodbye" },
            { time: 224.0, text: "I've got to take me away from all sadness" },
            { time: 233.0, text: "Stitch all my wounds, confess all the sins" },
            { time: 237.0, text: "And took all my insecurities" },
            { time: 242.0, text: "When will I got the love that is so pure?" },
            { time: 250.0, text: "Gotta have to always make sure" },
            { time: 254., text: "That I'm not just, I'm not just somebody's pleasure" },
            { time: 262.0, text: "Gotta have, gotta have to always make sure" },
            { time: 271.0, text: "I'm not just somebody's pleasure" }
        ]
    },
    {
        id: 6,
        title: "I Wanna Be Yours",
        artist: "Arctic Monkeys",
        album: "AM",
        albumArtUrl: "https://i.ytimg.com/vi/fJLQCf4mFP0/hqdefault.jpg",
        audioSrc: "song/I Wanna Be Yours.mp3",
        videoBgSrc: "video/i_wanna_be_yours_bg.mp4",
        lyrics: [
            { time: 18.0, text: "I wanna be your vacuum cleaner" },
            { time: 22.0, text: "Breathing in your dust" },
            { time: 25.0, text: "I wanna be your Ford Cortina" },
            { time: 29.0, text: "I will never rust" },
            { time: 33.0, text: "If you like your coffee hot" },
            { time: 36.0, text: "Let me be your coffee pot" },
            { time: 39.0, text: "You call the shots, babe" },
            { time: 42.0, text: "I just wanna be yours" },
            
            { time: 46.0, text: "Secrets I have held in my heart" },
            { time: 50.0, text: "Are harder to hide than I thought" },
            { time: 53.0, text: "Maybe I just wanna be yours" },
            { time: 57.0, text: "I wanna be yours, I wanna be yours" },
            { time: 62.0, text: "Wanna be yours, wanna be yours, wanna be yours" },

            { time: 75.0, text: "Let me be your 'leccy meter and I'll never run out" },
            { time: 82.0, text: "Let me be the portable heater that you'll get cold without" },
            { time: 89.0, text: "I wanna be your setting lotion (wanna be)" },
            { time: 93.0, text: "Hold your hair in deep devotion (how deep?)" },
            { time: 96.0, text: "At least as deep as the Pacific Ocean" },
            { time: 99.0, text: "I wanna be yours" },

            { time: 103.0, text: "Secrets I have held in my heart" },
            { time: 107.0, text: "Are harder to hide than I thought" },
            { time: 110.0, text: "Maybe I just wanna be yours" },
            { time: 113.0, text: "I wanna be yours, I wanna be yours" },
            { time: 119.0, text: "Wanna be yours, wanna be yours, wanna be yours" },
            { time: 130.0, text: "Wanna be yours, wanna be yours, wanna be yours" },
            { time: 140.0, text: "Wanna be yours, wanna be yours" },

            { time: 146.0, text: "I wanna be your vacuum cleaner (Wanna be yours)" },
            { time: 150.0, text: "Breathing in your dust (Wanna be yours)" },
            { time: 153.0, text: "I wanna be your Ford Cortina (Wanna be yours)" },
            { time: 157.0, text: "I will never rust (Wanna be yours)" },
            { time: 160.0, text: "I just wanna be yours (Wanna be yours)" },
            { time: 163.0, text: "I just wanna be yours (Wanna be yours)" },
            { time: 167.0, text: "I just wanna be yours (Wanna be yours)" }
        ]
    },
    {
        title: "Best Friend",
        artist: "Rex Orange County",
        album: "Apricot Princess",
        albumArtUrl: "song/cover.jpg",
        audioSrc: "song/Rex Orange County - Best Friend.mp3",
        videoBgSrc: "video/best_friend_bg.mp4",
        lyrics: [
            { time: 1.0, text: "I should have stayed at home" },
            { time: 4.0, text: "'Cause right now I see all these people that love me" },
            { time: 6.0, text: "But I still feel alone" },
            { time: 10.0, text: "Can't help but check my phone" },
            { time: 13.0, text: "I could have made you mine" },
            { time: 16.0, text: "But no, it wasn't meant to be" },
            { time: 18.0, text: "And see I wasn't made for you" },
            { time: 20.0, text: "And you weren't made for me" },
            { time: 23.0, text: "Though it seemed so easy..." },
            { time: 29.0, text: "And that's because I wanna be your favorite boy" },
            { time: 36.0, text: "I wanna be the one that makes your day" },
            { time: 39.0, text: "The one you think about as you lie awake" },
            { time: 43.0, text: "And I can't wait to be your number one" },
            { time: 49.0, text: "I'll be your biggest fan and you'll be mine" },
            { time: 52.0, text: "But I still wanna break your heart and make you cry" },
    
            { time: 57.0, text: "But won't you wait?" },
            { time: 61.0, text: "You know it's too late" },
            { time: 64.0, text: "I'm on my own shit now" },
            { time: 68.0, text: "Let me tell you how it feels to be fucking great" },
            { time: 74.0, text: "I feel great" },
    
            { time: 84.0, text: "You need to be yourself" },
            { time: 88.0, text: "Love someone for loving you instead of someone really cool" },
            { time: 91.0, text: "That makes your heart melt" },
            { time: 94.0, text: "Who knows what you truly felt" },
    
            { time: 97.0, text: "You're still my favorite girl" },
            { time: 101.0, text: "You better trust me when I tell you" },
            { time: 103.0, text: "There ain't no one else more beautiful in this damn world" },
            { time: 107.0, text: "In this damn world" },
    
            { time: 117.0, text: "You're gonna wanna be my best friend, baby" },
            { time: 120.0, text: "You're gonna wanna be my best friend" },
            
            { time: 129.0, text: "i said that" },
    
            { time: 130.0, text: "You're gonna wanna be my best friend, baby" },
            { time: 133.0, text: "You're gonna wanna be my best friend" },
            { time: 143.0, text: "You're gonna wanna be my best friend, baby" },
            { time: 146.0, text: "You're gonna wanna be my best friend" },
            { time: 156.0, text: "You're gonna wanna be my best friend, baby" },
            { time: 159.0, text: "You're gonna wanna be my best friend" },

            { time: 169.0, text: "I say that I'm happy" },
            { time: 173.0, text: "I say that I'm happy" },
            { time: 176.0, text: "But no, no, no, no" },
            { time: 179.0, text: "No, no, no, oh" },

            { time: 183, text: "I still wanna be your favorite boy" },
            { time: 188, text: "I wanna be the one that makes your day" },
            { time: 192, text: "The one you think about as you lie awake" },
            { time: 195, text: "And I can't wait to be your number, your number one" },
            { time: 201, text: "I'll be your biggest fan and you'll be mine" },
            { time: 204, text: "But I still wanna break your heart and make you cry" },

            { time: 240, text: "I still wanna be your favorite boy" },
            { time: 247, text: "I wanna be the one" },
            { time: 250, text: "I might just be the one" },         
        ]
    },
    {   
        title: "About You",
        artist: "The 1975",
        album: "Being Funny in a Foreign Language",
        albumArtUrl: "song/About You.jpg",
        audioSrc: "song/The 1975 - About You.mp3",
        videoBgSrc: "video/About_You.mp4",
        lyrics: [
             { time: 45, text: "I know a place" },
             { time: 55, text: "It's somewhere I go when I need to remember your face" },
             { time: 64, text: "We get married in our heads" },
             { time: 74, text: "Something to do while we try to recall how we met" },
      
             { time: 84, text: "Do you think I have forgotten?" },
             { time: 89, text: "Do you think I have forgotten?" },
             { time: 93, text: "Do you think I have forgotten" },
             { time: 99, text: "About you?" },
      
             { time: 104, text: "You and I (Don't let go)" },
             { time: 109, text: "We're alive (Don't let go)" },
             { time: 114, text: "With nothing to do, I could lay and just look in your eyes" },
             { time: 125, text: "Wait (Don't let go)" },
             { time: 129, text: "And pretend (Don't let go, oh)" },
             { time: 135, text: "Hold on and hope that we'll find our way back in the end (In the end)" },
      
             { time: 144, text: "Do you think I have forgotten?" },
             { time: 149, text: "Do you think I have forgotten?" },
             { time: 154, text: "Do you think I have forgotten" },
             { time: 159, text: "About you?" },
             { time: 164, text: "Do you think I have forgotten?" },
             { time: 169, text: "Do you think I have forgotten?" },
             { time: 174, text: "Do you think I have forgotten" },
             { time: 179, text: "About you?" },
      
             { time: 184, text: "And there was something about you that now I can't remember" },
             { time: 189, text: "It's the same damn thing that made my heart surrender" },
             { time: 194, text: "And I'll miss you on a train, I'll miss you in the mornin'" },
             { time: 199, text: "I never know what to think about" },
             { time: 203, text: "I think about you (Don't let go)" },
             { time: 209, text: "About you (Don't let go)" },
      
             { time: 214, text: "Do you think I have forgotten" },
             { time: 219, text: "About you (Don't let go, oh)" },
             { time: 224, text: "About you" },
             { time: 229, text: "About you" },
             
             { time: 234, text: "Do you think I have forgotten" },
             
             { time: 239, text: "About you (Don't let go)" }
        ]
    },
    {   
        title: "You & I",
        artist: "One Direction",
        album: "Midnight Memories",
        albumArtUrl: "song/you&i.png",
        audioSrc: "song/One Direction - You & I.mp3",
        videoBgSrc: "video/you&i.mp4",
        lyrics: [
             { time: 20, text: "I figured it out" },
             { time: 23, text: "I figured it out from black and white" },
             { time: 27, text: "Seconds and hours" },
             { time: 31, text: "Maybe they had to take some time" },
             { time: 34, text: "I know how it goes" },
             { time: 38, text: "I know how it goes from wrong and right" },
             { time: 41, text: "Silence and sound" },
             { time: 45, text: "Did they ever hold each other tight like us?" },
             { time: 51, text: "Did they ever fight like us?" },
        
             { time: 57, text: "You and I" },
             { time: 61, text: "We don't wanna be like them" },
             { time: 64, text: "We can make it till the end" },
             { time: 68, text: "Nothing can come between you and I" },
             { time: 73, text: "Not even the gods above" },
             { time: 77, text: "Can separate the two of us" },
             { time: 81, text: "No, nothing can come between you and I" },
        
             { time: 89, text: "Oh, you and I" },
        
             { time: 98, text: "I figured it out" },
             { time: 102, text: "Saw the mistakes of up and down" },
             { time: 106, text: "Meet in the middle" },
             { time: 109, text: "There's always room for common ground" },
             { time: 113, text: "I see what it's like" },
             { time: 117, text: "I see what it's like for day and night" },
             { time: 120, text: "Never together" },
             { time: 124, text: "'Cause they see things in a different light like us" },
             { time: 130, text: "But they never tried like us" },
        
             { time: 136, text: "You and I" },
             { time: 139, text: "We don't wanna be like them" },
             { time: 143, text: "We can make it till the end" },
             { time: 147, text: "Nothing can come between you and I" },
             { time: 152, text: "Not even the gods above" },
             { time: 156, text: "Can separate the two of us" },
        
             { time: 178, text: "'Cause you and I" },
             { time: 183, text: "We don't wanna be like them" },
             { time: 186, text: "We can make it till the end" },
             { time: 190, text: "Nothing can come between you and I (Nothing can come between, yeah)" },
             { time: 195, text: "Not even the gods above" },
             { time: 199, text: "Can separate the two of us" },
             { time: 203, text: "No, nothing can come between you and I (You and I)" },
        
             { time: 212, text: "Oh, you and I (Oh)" },
        
             { time: 219, text: "You and I" },
             { time: 222, text: "We could make it if we try, you and I" },
             { time: 226, text: "Oh, you and I" },
             
        ]
    },
    {    title: "Nothing",
        artist: "Bruno Major",
        album: "A Song for Every Moon",
        albumArtUrl: "song/nothing.jpg",
        audioSrc: "song/Bruno Major - Nothing.mp3",
        videoBgSrc: "video/nothing.mp4",
        lyrics: [
              { time: 3, text: "Track suits and red wine, movies for two" },
              { time: 8, text: "We'll take off our phones and we'll turn off our shoes" },
              { time: 13, text: "We'll play Nintendo though I always lose" },
              { time: 19, text: "'Cause you watch the TV while I'm watching you" },
              { time: 24, text: "There's not many people I'd honestly say" },
              { time: 29, text: "I don't mind losing to" },
              { time: 34, text: "But there's nothing like doing nothing with you" },
        
              { time: 42, text: "Dumb conversation, we lose track of time" },
              { time: 49, text: "Have I told you lately I'm grateful you're mine?" },
              { time: 55, text: "We'll watch The Notebook for the seventeenth time" },
              { time: 59, text: "I'll say \"It's stupid,\" then you'll catch me crying" },
              { time: 64, text: "We're not making out on a boat in the rain" },
              { time: 70, text: "Or in a house I painted blue" },
              { time: 75, text: "But there's nothing like doing nothing with you" },
        
              { time: 85, text: "So shut all the windows, lock all the doors" },
              { time: 90, text: "We're not looking for no one, don't need nothing more" },
              { time: 96, text: "You'll bite my lip and I'll want you more" },
              { time: 101, text: "Until we end up in a heap on the floor" },
              { time: 106, text: "(Mmm, mmm, mmm)" },
        
              { time: 115, text: "You could be dancing on tabletops, wearing high heels" },
              { time: 121, text: "Drinking until the world spins like a wheel" },
              { time: 126, text: "But tonight, your apartment has so much appeal" },
              { time: 131, text: "Who needs stars? We've got a roof" },
              { time: 136, text: "But there's nothing like doing nothing with you (Mmm)" },
              { time: 147, text: "No, there's nothing like doing nothing with you" }
        ]
    },
    {   
        title: "To The Bone",
        artist: "Pamungkas",
        album: "Walk the Talk",
        albumArtUrl: "song/to the bone.jpg",
        audioSrc: "song/To The Bone  - Pamungkas.mp3",
        videoBgSrc: "video/to the bone.mp4",
        lyrics: [
            
                { time: 35, text: "Have I ever told you" },
                { time: 38, text: "I want you to the bone" },
                { time: 41, text: "Have I ever called you" },
                { time: 45, text: "When you are all alone" },
                { time: 48, text: "And if I ever forget" },
                { time: 52, text: "To tell you how I feel" },
                { time: 56, text: "Listen to me now, babe" },
                { time: 58, text: "I want you to the bone" },
              
                { time: 62, text: "I want you to the bone, oh-oh-oh" },
                { time: 69, text: "I want you to the bone, oh-oh-oh" },
              
                { time: 75, text: "Maybe if you can see" },
                { time: 79, text: "What I feel through my bone" },
                { time: 82, text: "Every corner in me" },
                { time: 86, text: "There's your presence that grown" },
                { time: 89, text: "Maybe I nurture it more" },
                { time: 93, text: "By saying how I feel" },
                { time: 96, text: "But I did mean it before" },
                { time: 100, text: "I want you to the bone" },
                { time: 103, text: "I want you to" },
              
                { time: 105, text: "Take me home, I’m fallin'" },
                { time: 108, text: "Love me long, I'm rollin’" },
                { time: 111, text: "Losing control, body and soul" },
                { time: 115, text: "Mind too for sure, I'm already yours" },
                { time: 118, text: "Walk you down, I'm all in" },
                { time: 122, text: "Hold you tight, you call and" },
                { time: 125, text: "I'll take control your body and soul" },
                { time: 128, text: "Mind too for sure, I'm already yours" },
              
                { time: 135, text: "Would that be alright?" },
                { time: 141, text: "Hey, would that be alright?" },
              
                { time: 145, text: "I want you to the bone, oh-oh-oh" },
                { time: 151, text: "So bad I can't breathe, mm-oh-oh" },
                { time: 158, text: "I want you to the bone" },
              
                { time: 173, text: "Of all the ones that begged to stay" },
                { time: 176, text: "I'm still longing for you" },
                { time: 180, text: "Of all the ones that cried their way" },
                { time: 183, text: "I'm still waiting on you" },
                { time: 186, text: "Maybe we seek for something that" },
                { time: 190, text: "We couldn’t ever have" },
                { time: 193, text: "Maybe we choose the only love" },
                { time: 196, text: "We know we won’t accept" },
                { time: 200, text: "Or maybe we're taking all the risks" },
                { time: 203, text: "For something that is real" },
                { time: 207, text: "’Cause maybe the greatest love of all" },
                { time: 210, text: "Is who the eyes can't see, yeah" },
              
                // instrumental break bisa dikosongkan jika ingin pause
                
              
                { time: 242, text: "Take me home, I'm fallin'" },
                { time: 245, text: "Love me long, I’m rollin'" },
                { time: 248, text: "Losing control, body and soul" },
                { time: 252, text: "Mind too for sure, I'm already yours" },
                { time: 256, text: "Walk you down, I'm all in" },
                { time: 259, text: "Hold you tight, I call and" },
                { time: 262, text: "I'll take control your body and soul" },
                { time: 265, text: "Mind too for sure, I'm already yours, oh-oh" },
              
                { time: 281, text: "Oh yeah" },
                { time: 282, text: "(Would you just take me home?)" },
                { time: 285, text: "(Would you just love me long?)" },
                { time: 288, text: "(Or should I keep hoping on?)" },
                { time: 292, text: "(Should I keep hoping on?)" },
                { time: 296, text: "(Could I just take you home?)" },
                { time: 299, text: "(Could I just love you long?)" },
                { time: 302, text: "(Or should I keep hoping on?)" },
                { time: 306, text: "(Should I keep hoping on?)" },
              
                { time: 309, text: "See, I want you to the bone, yeah" },
                { time: 315, text: "I want you to the bone, oh-oh-oh" },
                { time: 322, text: "I want you to the bone, yeah" },
              
                { time: 336, text: "I want you to the bone, bone, bone, oh" },
                { time: 343, text: "I want you to the bone" },
                { time: 349, text: "Eh" },
            
        ]
          
    },
    {
    
        title: "Let Down",
        artist: "Radiohead",
        album: "OK Computer",
        albumArtUrl: "song/let down.jpg",
        audioSrc: "song/Let Down - Radiohead.mp3",
        videoBgSrc: "video/let down.mp4",
        lyrics: [
                { time: 22, text: "Transport, motorways and tramlines" },
                { time: 29, text: "Starting and then stopping" },
                { time: 34, text: "Taking off and landing" },
                { time: 38, text: "The emptiest of feelings" },
                { time: 43, text: "Disappointed people" },
                { time: 47, text: "Clinging onto bottles" },
                { time: 52, text: "And when it comes it's so, so disappointing" },
      
                { time: 59, text: "Let down and hanging around" },
                { time: 67, text: "Crushed like a bug in the ground" },
                { time: 74, text: "Let down and hanging around" },
      
                { time: 90, text: "Shell smashed, juices flowing" },
                { time: 95, text: "Wings twitch, legs are going" },
                { time: 100, text: "Don't get sentimental" },
                { time: 105, text: "It always ends up drivel" },
                { time: 109, text: "One day I am gonna grow wings" },
                { time: 116, text: "A chemical reaction" },
                { time: 120, text: "Hysterical and useless" },
                { time: 126, text: "Hysterical and" },
      
                { time: 128, text: "Let down and hanging around" },
                { time: 135, text: "Crushed like a bug in the ground" },
                { time: 142, text: "Let down and hanging around" },
      
                { time: 187, text: "Let down and hang..." },
                { time: 196, text: "Let down and hang..." },
                { time: 206, text: "Let down and hang..." },
      
                { time: 221, text: "You know, you know where you are with" },
                { time: 228, text: "You know where you are with" },
                { time: 233, text: "Floor collapsing" },
                { time: 235, text: "Floating, bouncing back" },
                { time: 239, text: "And one day, I am gonna grow wings" },
                { time: 246, text: "A chemical reaction (You know where you are)" },
                { time: 251, text: "Hysterical and useless (You know where you are)" },
                { time: 256, text: "Hysterical and (You know where you are)" },
      
                { time: 259, text: "Let down and hanging around" },
                { time: 265, text: "Crushed like a bug in the ground" },
                { time: 272, text: "Let down and hanging around" }
        ]
    },
    {
        title: "Happiness",
        artist: "Rex Orange County",
        album: "Apricot Princess",
        albumArtUrl: "song/happiness.jpg",
        audioSrc: "song/Happiness - Rex Orange County.mp3",
        videoBgSrc: "video/happiness.mp4",
        lyrics: [
            { time: 0, text: "I'll be the one that stays 'til the end" },
            { time: 7, text: "And I'll be the one that needs you again" },
            { time: 13, text: "And I'll be the one that proposes in a garden of roses" },
            { time: 22, text: "And truly loves you long after our curtain closes" },
    
            { time: 29, text: "But will you still love me when nobody wants me around?" },
            { time: 41, text: "When I turn 81 and forget things, will you still be proud?" },
    
            { time: 54, text: "'Cause I am the one that's waited this long" },
            { time: 61, text: "And I am the one that might get it wrong" },
            { time: 67, text: "And I'll be the one that will love you the way I'm supposed to, girl" },
    
            { time: 83, text: "But will you still love me when nobody wants me around?" },
            { time: 96, text: "When I turn 81 and forget things, will you still be proud?" },
    
            { time: 110, text: "Proud of me, of my short list of accomplishments" },
            { time: 117, text: "Me and my lack of new news" },
            { time: 124, text: "Me and my selfishness, me and myself" },
    
            { time: 130, text: "Wish you nothing but a happy new version of you" },
            { time: 138, text: "Because I" },
            { time: 141, text: "I, mmm" },
    
            { time: 146, text: "Mmm-mmm-mmm, mmm-mmm, yeah" },
            { time: 151, text: "I want you to tell me you find it hard to be yourself" },
            { time: 158, text: "So I can say it's gonna be alright, yeah" },
            { time: 165, text: "And I want you to love me the way you love your family" },
    
            { time: 171, text: "The way you love to show me what it's like" },
            { time: 179, text: "To be happy" },
    
        ]
    },
    {
        title: "No. 1 Party Anthem",
        artist: "Arctic Monkeys",
        album: "AM",
        albumArtUrl: "song/no1partyanthem.png",
        audioSrc: "song/No. 1 Party Anthem - Arctic Monkeys.mp3",
        videoBgSrc: "video/no1partyanthem.mp4",
        lyrics: [
            
            { time: 3, text: "So you're on the prowl wondering whether" },
            { time: 7, text: "She left already or not" },
            { time: 11, text: "Leather jacket, collar popped like antenna" },
            { time: 15, text: "Never knowin' when to stop" },
            { time: 19, text: "Sunglasses indoors" },
            { time: 21, text: "Par for the course" },
            { time: 23, text: "Lights in the floors and sweat on the walls" },
            { time: 29, text: "Cages and poles" },
    
            
            { time: 36, text: "Call off the search for your soul" },
            { time: 39, text: "Or put it on hold again" },
            { time: 41, text: "She's having a sly indoor smoke" },
            { time: 45, text: "And she calls the folks who run this, her oldest friends" },
            { time: 50, text: "Sippin' her drink and laughin' at imaginary jokes" },
            { time: 55, text: "As all the signals are sent, her eyes invite you to approach" },
            { time: 62, text: "And it seems as though those lumps in your throat" },
            { time: 66, text: "That you just swallowed have got you going" },
    
           
            { time: 71, text: "Come on, come on, come on" },
            { time: 75, text: "Come on, come on, come on" },
            { time: 78, text: "Number one party anthem" },
    
            
            { time: 87, text: "She's a certified mind blower" },
            { time: 90, text: "Knowing full well that I know" },
            { time: 95, text: "May suggest there's somewhere from which I might know her" },
            { time: 99, text: "Just to get the ball to roll" },
            { time: 102, text: "Drunken monologues, confused because" },
            { time: 106, text: "It's not like I'm falling in love, I just want you" },
            { time: 111, text: "To do me no good" },
            { time: 115, text: "And you look like you could" },
    
            
            { time: 120, text: "Come on, come on, come on" },
            { time: 125, text: "Come on, come on, come on" },
            { time: 128, text: "Number one party anthem" },
            { time: 134, text: "Come on, come on, come on" },
            { time: 138, text: "Before the moment's gone" },
            { time: 141, text: "Number one party anthem, yeah, yeah" },
    
        
            { time: 149, text: "The look of love, the rush of blood" },
            { time: 153, text: "The \"She's with me\"s, the Gallic shrug" },
            { time: 158, text: "The shutterbugs, the Camera Plus" },
            { time: 162, text: "The black & white and the colour dodge" },
            { time: 166, text: "The good time girls, the cubicles" },
            { time: 170, text: "The house of fun, the number one" },
            { time: 176, text: "Party anthem, oh" },
    
            
            { time: 196, text: "Come on, come on, come on" },
            { time: 200, text: "Come on, come on, come on" },
            { time: 204, text: "Come on, come on, come on" },
            { time: 208, text: "Come on, come on, come on" },
            { time: 213, text: "Before the moment's gone" },
            { time: 216, text: "Number one party anthem" },
            { time: 221, text: "Number one party anthem" },
            { time: 224, text: "Number one party anthem" },
            { time: 230, text: "Yeah, yeah" }
        ]
    },
         

    {
        title: "Piano Man",
        artist: "Billy Joel",
        album: "Piano Man",
        albumArtUrl: "song/pianoman.jpg",
        audioSrc: "song/Piano Man - Billy Joel.mp3",
        videoBgSrc: "video/pianoman.mp4",
        lyrics: [
            { time: 31, text: "It's nine o'clock on a Saturday" },
            { time: 35, text: "The regular crowd shuffles in" },
            { time: 39, text: "There's an old man sittin' next to me" },
            { time: 43, text: "Makin' love to his tonic and gin" },
            { time: 57, text: "He says, \"Son, can you play me a memory?" },
            { time: 62, text: "I'm not really sure how it goes" },
            { time: 66, text: "But it's sad, and it's sweet, and I knew it complete" },
            { time: 70, text: "When I wore a younger man's clothes" },
            { time: 74, text: "La, la-la, di-dee-da" },
            { time: 116, text: "Now John at the bar is a friend of mine" },
            { time: 121, text: "He gets me my drinks for free" },
            { time: 125, text: "And he's quick with a joke, or to light up your smoke" },
            { time: 129, text: "But there's someplace that he'd rather be" },
            { time: 135, text: "He says, \"Bill, I believe this is killing me\"" },
            { time: 139, text: "As the smile ran away from his face" },
            { time: 143, text: "\"Well, I'm sure that I could be a movie star" },
            { time: 147, text: "If I could get out of this place\"" },
            { time: 151, text: "Oh, la, la-la, di-dee-da" },
            { time: 156, text: "La-la, di-dee-da da-dum" },
            { time: 163, text: "Now Paul is a real estate novelist" },
            { time: 168, text: "Who never had time for a wife" },
            { time: 172, text: "And he's talkin' with Davy, who's still in the navy" },
            { time: 176, text: "And probably will be for life" },
            { time: 189, text: "And the waitress is practicing politics" },
            { time: 193, text: "As the businessmen slowly get stoned" },
            { time: 197, text: "Yes, they're sharing a drink they call loneliness" },
            { time: 201, text: "But it's better than drinkin' alone" },
            { time: 222, text: "Sing us a song, you're the piano man" },
            { time: 225, text: "Sing us a song tonight" },
            { time: 229, text: "Well, we're all in the mood for a melody" },
            { time: 234, text: "And you've got us feelin' alright" },
            { time: 252, text: "It's a pretty good crowd for a Saturday" },
            { time: 256, text: "And the manager gives me a smile" },
            { time: 259, text: "'Cause he knows that it's me they've been comin' to see" },
            { time: 264, text: "To forget about life for a while" },
            { time: 269, text: "And the piano, it sounds like a carnival" },
            { time: 273, text: "And the microphone smells like a beer" },
            { time: 277, text: "And they sit at the bar and put bread in my jar" },
            { time: 281, text: "And say, \"Man, what are you doin' here?\"" },
            { time: 285, text: "Oh, la, la-la, di-dee-da" },
            { time: 291, text: "La-la, di-dee-da da-dum" },
            { time: 298, text: "Sing us a song, you're the piano man" },
            { time: 302, text: "Sing us a song tonight" },
            { time: 305, text: "Well, we're all in the mood for a melody" },
            { time: 310, text: "And you've got us feelin' alright" }
        ]
    },

    {
        title: "Payphone",
        artist: "Maroon 5 ft. Wiz Khalifa",
        album: "Overexposed",
        albumArtUrl: "song/payphone.png",
        audioSrc: "song/Payphone - Maroon 5.mp3",
        videoBgSrc: "video/payphone.mp4",
        lyrics: [
            { time: 0, text: "I'm at a payphone, tryin' to call home" },
            { time: 5, text: "All of my change I spent on you" },
            { time: 9, text: "Where have the times gone? Baby, it's all wrong" },
            { time: 13, text: "Where are the plans we made for two?" },
    
            { time: 18, text: "Yeah, I, I know it's hard to remember" },
            { time: 21, text: "The people we used to be" },
            { time: 23, text: "It's even harder to picture" },
            { time: 26, text: "That you're not here next to me" },
            { time: 28, text: "You say it's too late to make it" },
            { time: 30, text: "But is it too late to try?" },
            { time: 32, text: "And in our time that you wasted" },
            { time: 34, text: "All of our bridges burned down" },
    
            { time: 37, text: "I've wasted my nights" },
            { time: 39, text: "You turned out the lights" },
            { time: 41, text: "Now I'm paralyzed" },
            { time: 43, text: "Still stuck in that time" },
            { time: 45, text: "When we called it love" },
            { time: 47, text: "But even the sun sets in paradise" },
    
            { time: 52, text: "I'm at a payphone, tryin' to call home" },
            { time: 57, text: "All of my change I spent on you" },
            { time: 61, text: "Where have the times gone? Baby, it's all wrong" },
            { time: 65, text: "Where are the plans we made for two?" },
            { time: 69, text: "If happy-ever-afters did exist" },
            { time: 74, text: "I would still be holdin' you like this" },
            { time: 78, text: "All those fairytales are full of shit" },
            { time: 83, text: "One more fuckin' love song, I'll be sick, oh" },
    
            { time: 89, text: "You turned your back on tomorrow" },
            { time: 91, text: "'Cause you forgot yesterday" },
            { time: 93, text: "I gave you my love to borrow" },
            { time: 96, text: "But you just gave it away" },
            { time: 97, text: "You can't expect me to be fine" },
            { time: 100, text: "I don't expect you to care" },
            { time: 102, text: "I know I said it before, but" },
            { time: 104, text: "All of our bridges burned down" },
    
            { time: 107, text: "I've wasted my nights" },
            { time: 109, text: "You turned out the lights" },
            { time: 111, text: "Now I'm paralyzed" },
            { time: 113, text: "Still stuck in that time" },
            { time: 115, text: "When we called it love" },
            { time: 117, text: "But even the sun sets in paradise" },
    
            { time: 122, text: "I'm at a payphone, tryin' to call home" },
            { time: 126, text: "All of my change I spent on you" },
            { time: 131, text: "Where have the times gone? Baby, it's all wrong" },
            { time: 135, text: "Where are the plans we made for two?" },
            { time: 139, text: "If happy-ever-afters did exist" },
            { time: 144, text: "I would still be holdin' you like this" },
            { time: 148, text: "And all those fairytales are full of shit" },
            { time: 153, text: "One more fuckin' love song, I'll be sick" },
            { time: 157, text: "Now I'm at a payphone" },
    
            { time: 159, text: "Man, fuck that shit" },
            { time: 160, text: "I be out spendin' all this money while you sittin' 'round" },
            { time: 162, text: "Wonderin' why it wasn't you who came up from nothin'" },
            { time: 165, text: "Made it from the bottom, now when you see me, I'm stuntin'" },
            { time: 167, text: "And all of my cars start with the push of a button" },
            { time: 169, text: "Tellin' me I changed since I blew up or whatever you call it" },
            { time: 171, text: "Switched the number to my phone so you never could call it" },
            { time: 174, text: "Don't need my name on my shirt, you can tell that I'm ballin'" },
            { time: 176, text: "Swish, what a shame, coulda got picked" },
            { time: 178, text: "Had a really good game, but you missed your last shot" },
            { time: 180, text: "So you talk about who you see at the top" },
            { time: 182, text: "Or what you coulda saw, but sad to say it's over for" },
            { time: 184, text: "Phantom pulled up, valet open doors" },
            { time: 186, text: "Wished I'd go away, got what you was looking for" },
            { time: 189, text: "Now it's me who they want" },
            { time: 190, text: "So you can go and take that little piece of shit with you" },
    
            { time: 192, text: "Yeah, I'm at a payphone, tryin' to call home" },
            { time: 196, text: "All of my change I spent on you" },
            { time: 200, text: "Where have the times gone? Baby, it's all wrong" },
            { time: 205, text: "Where are the plans we made for two?" },
            { time: 209, text: "If happy-ever-after's did exist" },
            { time: 213, text: "I would still be holdin' you like this" },
            { time: 218, text: "And all these fairytales are full of shit" },
            { time: 222, text: "One more fuckin' love song, I'll be sick" },
            { time: 226, text: "Yeah, now I'm at a payphone" }
        ]
    },
    {
        title: "Wonderwall",
        artist: "Oasis",
        album: "(What's the Story) Morning Glory?",
        albumArtUrl: "song/wonderwall.png",
        audioSrc: "song/Wonderwall - Oasis.mp3",
        videoBgSrc: "video/wonderwall.mp4",
        lyrics: [
          // Verse 1
          { time: 38, text: "Today is gonna be the day" },
          { time: 40, text: "That they're gonna throw it back to you" },
          { time: 44, text: "By now, you should've somehow" },
          { time: 46, text: "Realised what you gotta do" },
          { time: 49, text: "I don't believe that anybody" },
          { time: 51, text: "Feels the way I do about you now" },
      
          // Verse 2
          { time: 60, text: "Backbeat, the word is on the street" },
          { time: 62, text: "That the fire in your heart is out" },
          { time: 65, text: "I'm sure you've heard it all before" },
          { time: 67, text: "But you never really had a doubt" },
          { time: 71, text: "I don't believe that anybody" },
          { time: 73, text: "Feels the way I do about you now" },
      
          // Pre-Chorus
          { time: 81, text: "And all the roads we have to walk are winding" },
          { time: 87, text: "And all the lights that lead us there are blinding" },
          { time: 93, text: "There are many things that I would like to say to you" },
          { time: 97, text: "But I don't know how" },
      
          // Chorus
          { time: 103, text: "Because maybe" },
          { time: 108, text: "You're gonna be the one that saves me" },
          { time: 113, text: "And after all" },
          { time: 118, text: "You're my wonderwall" },
      
          // Verse 3
          { time: 130, text: "Today was gonna be the day" },
          { time: 132, text: "But they'll never throw it back to you" },
          { time: 136, text: "By now, you should've somehow" },
          { time: 138, text: "Realised what you're not to do" },
          { time: 141, text: "I don't believe that anybody" },
          { time: 144, text: "Feels the way I do about you now" },
      
          // Pre-Chorus 2
          { time: 152, text: "And all the roads that lead you there were winding" },
          { time: 157, text: "And all the lights that light the way are blinding" },
          { time: 163, text: "There are many things that I would like to say to you" },
          { time: 167, text: "But I don't know how" },
      
          // Chorus 2
          { time: 174, text: "I said maybe" },
          { time: 178, text: "You're gonna be the one that saves me" },
          { time: 184, text: "And after all" },
          { time: 189, text: "You're my wonderwall" },
          { time: 196, text: "I said maybe (I said maybe)" },
          { time: 200, text: "You're gonna be the one that saves me" },
          { time: 206, text: "And after all" },
          { time: 211, text: "You're my wonderwall" },
      
          // Outro
          { time: 218, text: "I said maybe (I said maybe)" },
          { time: 222, text: "You're gonna be the one that saves me (That saves me)" },
          { time: 228, text: "You're gonna be the one that saves me (That saves me)" },
          { time: 233, text: "You're gonna be the one that saves me (That saves me)" }
        ]
      },

      {
        title: "Married With Children",
        artist: "Oasis",
        album: "Definitely Maybe",
        albumArtUrl: "song/marriedwithchildren.jpg",
        audioSrc: "song/Married With Children - Oasis.mp3",
        videoBgSrc: "video/marriedwithchildren.mp4",
        lyrics: [
          // Chorus 1
          { time: 26, text: "There's no need for you to say you're sorry" },
          { time: 30, text: "Goodbye, I'm going home" },
          { time: 36, text: "I don't care no more so don't you worry" },
          { time: 41, text: "Goodbye, I'm going home" },
      
          // Verse 1
          { time: 47, text: "I hate the way that even though you know you're wrong" },
          { time: 53, text: "You say you're right" },
          { time: 58, text: "I hate the books you read and all your friends" },
          { time: 63, text: "Your music's shite, it keeps me up all night, up all night" },
      
          // Chorus 2
          { time: 69, text: "There's no need for you to say you're sorry" },
          { time: 73, text: "Goodbye, I'm going home" },
          { time: 80, text: "I don't care no more so don't you worry" },
          { time: 84, text: "Goodbye, I'm going home" },
      
          // Verse 2
          { time: 91, text: "I hate the way that you are so sarcastic" },
          { time: 95, text: "And you're not very bright" },
          { time: 101, text: "You think that everything you've done's fantastic" },
          { time: 106, text: "Your music's shite, it keeps me up all night, up all night" },
      
          // Instrumental Break (placeholder)
          { time: 113, text: "[Instrumental Break]" },
      
          // Bridge
          { time: 135, text: "And it will be nice to be alone" },
          { time: 140, text: "For a week or two" },
          { time: 145, text: "But I know then I will be right" },
          { time: 150, text: "Right back here with you, with you, with you, with you" },
          { time: 157, text: "With you, with you, with you" },
      
          // Chorus 3 (Outro)
          { time: 164, text: "There's no need for you to say you're sorry" },
          { time: 169, text: "Goodbye, I'm going home" },
          { time: 175, text: "I don't care no more so don't you worry" },
          { time: 180, text: "Goodbye, I'm going home" }
        ]
      },

      {
        title: "Multo",
        artist: "Cup Of Joe",
        album: "Single",
        albumArtUrl: "song/multo.png",
        audioSrc: "song/Multo.mp3",
        videoBgSrc: "video/multo.mp4",
        lyrics: [
          { time: 23, text: "Humingang malalim, pumikit na muna" },
          { time: 32, text: "At baka sakaling namamalikmata lang" },
          { time: 41, text: "Ba't nababahala? 'Di ba't ako'y mag-isa?" },
          { time: 50, text: "Kala ko'y payapa, boses mo'y tumatawag pa" },
      
          { time: 59, text: "Binaon naman na ang lahat" },
          { time: 64, text: "Tinakpan naman na 'king sugat" },
          { time: 69, text: "Ngunit ba't ba andito pa rin?" },
          { time: 74, text: "Hirap na 'kong intindihin" },
      
          { time: 78, text: "Tanging panalangin, lubayan na sana" },
          { time: 87, text: "Dahil sa bawat tingin, mukha mo'y nakikita" },
          { time: 96, text: "Kahit sa'n man mapunta ay anino mo'y kumakapit sa'king kamay" },
          { time: 105, text: "Ako ay dahan-dahang nililibing nang buhay pa" },
      
          { time: 115, text: "Hindi na makalaya, dinadalaw mo 'ko bawat gabi" },
          { time: 123, text: "Wala mang nakikita, haplos mo'y ramdam pa rin sa dilim" },
          { time: 133, text: "Hindi na na-nanaginip, hindi na ma-makagising" },
          { time: 142, text: "Pasindi na ng ilaw" },
          { time: 147, text: "Minumulto na 'ko ng damdamin ko, ng damdamin ko" },
      
          { time: 153, text: "Hindi mo ba ako lilisanin?" },
          { time: 158, text: "Hindi pa ba sapat pagpapahirap sa 'kin? (Ng damdamin ko)" },
          { time: 162, text: "Hindi na ba ma-mamamayapa?" },
          { time: 167, text: "Hindi na ba ma-mamamayapa?" },
      
          { time: 170, text: "Hindi na makalaya, dinadalaw mo 'ko bawat gabi" },
          { time: 179, text: "Wala mang nakikita, haplos mo'y ramdam pa rin sa dilim" },
          { time: 189, text: "Hindi na na-nanaginip, hindi na ma-makagising" },
          { time: 198, text: "Pasindi na ng ilaw" },
          { time: 202, text: "Minumulto na 'ko ng damdamin ko, ng damdamin ko" },
      
          { time: 208, text: "(Makalaya) Hindi mo ba ako lilisanin?" },
          { time: 212, text: "(Dinadalaw mo 'ko bawat gabi) Hindi pa ba sapat pagpapahirap sa 'kin" },
          { time: 217, text: "(Wala mang nakikita) Hindi na ba ma-mamamayapa?" },
          { time: 221, text: "(Haplos mo'y ramdam pa rin sa dilim) Hindi na ba ma-mamamayapa" }
        ]
      },

      {
        title: "Oh Ok (Release the Files)",
        artist: "Ian & Sochi",
        album: "Single",
        albumArtUrl: "song/ohok.png",
        audioSrc: "song/Oh Ok (Release the Files) - Ian & Sochi.mp3",
        videoBgSrc: "video/ohok.mp4",
        lyrics: [
          // Intro
          { time: 0, text: "Hmm" },
          { time: 3, text: "Hmm" },
          { time: 5, text: "Hmm" },
      
          // Verse 1
          { time: 6, text: "Walk in that bitch like, 'How the hell y'all doin'? How y'all feelin' today?'" },
          { time: 9, text: "Ready to turn myself in down at the station, I made a killin' today" },
          { time: 12, text: "Always gon' be money, always gon' be hoes, always gon' be somethin'" },
          { time: 16, text: "Only thing you got is your word, I put that shit on my momma" },
          { time: 19, text: "Nah, you really just can't get comfy, gotta keep at it, buddy" },
          { time: 22, text: "'Fore I had this money, wasn't worry 'bout nothin', that shit feel backwards to me" },
          { time: 25, text: "\"ian always gettin' high, what happened to him? ian, what happened to ya?\"" },
          { time: 28, text: "I'm the same I was, I'm just gettin' paid with a few more habits now" },
          { time: 31, text: "Aw, shit, here we go again" },
      
          // Chorus
          { time: 34, text: "I'm on timin', bitch, you don't know what time it is? Oh, okay" },
          { time: 37, text: "Oh, you got migraines? You don't wanna ride this shit? Oh, okay" },
          { time: 40, text: "Plug like, 'Goddamn, you really want every flavor? Oh, okay'" },
          { time: 44, text: "You weren't 'round then, but you wanna come cryin', bitch? Oh, okay" },
      
          // Verse 2
          { time: 47, text: "Damn, it's gettin' hot in here, take off all your clothes" },
          { time: 49, text: "Damn, I'm feelin' like 50 Cent, bitch, I'm in the club" },
          { time: 53, text: "Damn, I'm on my Britney shit, oops, I hit again" },
          { time: 56, text: "Damn, I'm on my DJ Khaled shit, we the best" },
          { time: 59, text: "Damn, we rollin' hella deep, I feel like Adele" },
          { time: 62, text: "Damn, kiss me through the phone, suck me through the cell" },
          { time: 65, text: "Damn, I'm a lil' too high for this, Jesus, take the wheel" },
      
          // Chorus 2
          { time: 69, text: "I'm on timin', bitch, you don't know what time it is? Oh, okay" },
          { time: 72, text: "Oh, you got migraines? You don't wanna ride this shit? Oh, okay" },
          { time: 75, text: "Plug like, 'Goddamn, you really want every flavor? Oh, okay'" },
          { time: 78, text: "You weren't 'round then, but you wanna come cryin', bitch?" },
          { time: 81, text: "I'm on-I'm on-I'm on timin', bitch, you don't know what time it is? Oh, okay" },
          { time: 84, text: "Oh, you got migraines? You don't wanna ride this shit? Oh, okay" },
          { time: 87, text: "Plug like, 'Goddamn, you really want every flavor? Oh, okay'" },
          { time: 91, text: "You weren't 'round then, but you wanna come cryin', bitch? Oh, okay" },
      
          // Outro
          { time: 94, text: "Hmm" },
          { time: 97, text: "Hmm" }
        ]
      }
      
      
      
      
    

    
    
    
    
      
]     
        
    
    

let currentSongIndex = 0;
let isPlaying = false;
let isShuffle = false;
let repeatMode = 0; // 0: no repeat, 1: repeat one, 2: repeat all

// --- Page Navigation ---
function showHomePage() {
    playerPage.classList.remove('active');
    songDetailPage.classList.remove('active'); // Pastikan detail page disembunyikan
    homePage.classList.add('active');

    bodyElement.classList.remove('player-active-bg');
    bodyElement.classList.remove('detail-active-bg');
    backgroundVideoContainer.classList.remove('active'); // Sembunyikan video background
    backgroundVideo.pause(); // Jeda video background
    backgroundVideo.src = ""; // Kosongkan src video
    backgroundVideo.load();
    pauseTrack(); // Jeda musik saat kembali ke home
}

// Fungsi untuk menampilkan halaman detail lagu (tetap dipertahankan, tapi tidak dipanggil dari song list click)
function showSongDetailPage(song) {
    homePage.classList.remove('active');
    playerPage.classList.remove('active');
    songDetailPage.classList.add('active');

    detailAlbumArt.src = song.albumArtUrl;
    detailTrackTitle.textContent = song.title;
    detailTrackArtist.textContent = song.artist;
    detailAlbumName.textContent = song.album || "Unknown Album";

    bodyElement.classList.remove('player-active-bg');
    bodyElement.classList.add('detail-active-bg');
    backgroundVideoContainer.classList.remove('active');
    backgroundVideo.pause(); // Jeda video background
    backgroundVideo.src = ""; // Kosongkan src video
    backgroundVideo.load();
}

function showPlayerPage() {
    homePage.classList.remove('active');
    songDetailPage.classList.remove('active');
    playerPage.classList.add('active');

    bodyElement.classList.remove('detail-active-bg');
    bodyElement.classList.add('player-active-bg');
    backgroundVideoContainer.classList.add('active'); // Tampilkan video background

    const currentSong = songs[currentSongIndex];
    if (currentSong && currentSong.videoBgSrc) {
        backgroundVideo.src = currentSong.videoBgSrc;
        backgroundVideo.load();
        backgroundVideo.play().catch(e => console.error("Error playing video background:", e));
    } else {
        backgroundVideo.src = "";
        backgroundVideo.load(); // Kosongkan src jika tidak ada video khusus
    }
}

// --- Home Page Logic ---
function renderSongList() {
    songListElement.innerHTML = '';
    if (songs.length === 0) {
        songListElement.innerHTML = '<li class="loading-songs">Tidak ada lagu tersedia.</li>';
        return;
    }
    songs.forEach((song, index) => {
        const listItem = document.createElement('li');
        listItem.setAttribute('data-id', song.id);
        listItem.innerHTML = `
            <img src="${song.albumArtUrl}" alt="${song.title}" class="song-art-list">
            <div class="song-info-list">
                <h3>${song.title}</h3>
                <p>${song.artist}</p>
            </div>
        `;
        // --- Perubahan Penting di sini ---
        // Saat item lagu diklik, langsung muat & putar lagu lalu tampilkan halaman player
        listItem.addEventListener('click', () => {
            currentSongIndex = index;
            loadSong(songs[currentSongIndex]);
            playTrack();
            showPlayerPage(); // Langsung pindah ke halaman pemutar musik
        });

        // Event listener untuk hover
        listItem.addEventListener('mouseenter', () => {
            // Hanya aktifkan video background jika kita di halaman home
            if (homePage.classList.contains('active') && song.videoBgSrc) {
                backgroundVideo.src = song.videoBgSrc;
                backgroundVideo.load();
                backgroundVideoContainer.classList.add('active');
                backgroundVideo.play().catch(e => console.error("Error playing video on hover:", e));
                bodyElement.classList.add('player-active-bg'); // Tambahkan kelas untuk warna background body
            }
        });
        listItem.addEventListener('mouseleave', () => {
            // Sembunyikan video background hanya jika kita di halaman home
            if (homePage.classList.contains('active')) {
                backgroundVideoContainer.classList.remove('active');
                backgroundVideo.pause(); // Jeda video saat mouse meninggalkan
                backgroundVideo.src = ""; // Kosongkan src agar tidak memutar di background
                backgroundVideo.load();
                bodyElement.classList.remove('player-active-bg'); // Hapus kelas warna background body
            }
        });

        songListElement.appendChild(listItem);
    });
}

// --- Player Logic ---
function loadSong(song) {
    if (!song) {
        console.error("Lagu tidak ditemukan!");
        albumArtPlayer.src = "https://placehold.co/100x100/3a3a4e/e0e0e0?text=Error";
        playerTrackTitle.textContent = "Lagu Tidak Tersedia";
        playerTrackArtist.textContent = "-";
        lyricsContainer.innerHTML = "<p>Lirik tidak tersedia.</p>"; // Ganti textContent dengan innerHTML
        audioPlayer.src = "";
        playerCurrentTime.textContent = "0:00";
        playerTotalDuration.textContent = "0:00";
        playerProgressBar.style.width = "0%";
        return;
    }
    albumArtPlayer.src = song.albumArtUrl;
    playerTrackTitle.textContent = song.title;
    playerTrackArtist.textContent = song.artist;
    
    renderLyrics(song.lyrics); // Panggil fungsi renderLyrics
    
    audioPlayer.src = song.audioSrc;

    audioPlayer.onloadedmetadata = () => {
        playerTotalDuration.textContent = formatTime(audioPlayer.duration);
    };
    audioPlayer.load();
    updatePlayPauseIcon();
}

// Fungsi baru untuk merender lirik
function renderLyrics(lyrics) {
    lyricsContainer.innerHTML = ''; // Bersihkan container lirik
    if (!lyrics || lyrics.length === 0) {
        lyricsContainer.innerHTML = "<p>Lirik tidak tersedia untuk lagu ini.</p>";
        return;
    }

    lyrics.forEach(line => {
        const span = document.createElement('span');
        span.textContent = line.text;
        span.setAttribute('data-time', line.time); // Simpan timestamp di data-attribute
        span.classList.add('lyric-line'); // Tambahkan kelas untuk styling
        lyricsContainer.appendChild(span);
        // Hapus penambahan <br> secara manual, gunakan CSS display:block atau flexbox
        // lyricsContainer.appendChild(document.createElement('br'));
    });
}


function playTrack() {
    if (!audioPlayer.src || audioPlayer.src === window.location.href) {
        if (songs.length > 0) {
            loadSong(songs[currentSongIndex]);
        } else {
            console.log("Tidak ada lagu untuk dimainkan.");
            return;
        }
    }
    isPlaying = true;
    audioPlayer.play().catch(error => console.error("Error saat play:", error));
    updatePlayPauseIcon();
}

function pauseTrack() {
    isPlaying = false;
    audioPlayer.pause();
    updatePlayPauseIcon();
}

function updatePlayPauseIcon() {
    if (isPlaying) {
        playerPlayPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        playerPlayPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    }
}

function prevTrack() {
    if (songs.length === 0) return;
    if (isShuffle) {
        playRandomTrack();
    } else {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    }
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage(); // Perbarui video background
}

function nextTrackLogic() {
    if (songs.length === 0) return;
    if (isShuffle) {
        playRandomTrack();
    } else {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
    }
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage(); // Perbarui video background
}

function nextTrack() {
    if (songs.length === 0) return;

    if (repeatMode === 1 && audioPlayer.ended) {
        // Handled by audio.loop = true
    } else if (isShuffle) {
        playRandomTrack();
    } else {
        currentSongIndex++;
        if (currentSongIndex >= songs.length) {
            if (repeatMode === 2) {
                currentSongIndex = 0;
            } else {
                currentSongIndex = songs.length - 1;
                loadSong(songs[currentSongIndex]);
                pauseTrack();
                audioPlayer.currentTime = audioPlayer.duration;
                return;
            }
        }
        loadSong(songs[currentSongIndex]);
        playTrack();
    }
    showPlayerPage(); // Perbarui video background
}

function playRandomTrack() {
    if (songs.length <= 1) {
        currentSongIndex = 0;
    } else {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * songs.length);
        } while (randomIndex === currentSongIndex);
        currentSongIndex = randomIndex;
    }
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage(); // Perbarui video background
}

function scrollToActiveLyric() {
    const container = document.getElementById("lyricsContainer");
    const activeLine = container.querySelector(".lyric-line.highlight");
  
    if (activeLine) {
      const containerTop = container.scrollTop;
      const containerHeight = container.clientHeight;
      const lineOffsetTop = activeLine.offsetTop;
      const lineHeight = activeLine.offsetHeight;
  
      const targetScrollTop = lineOffsetTop - (containerHeight / 2) + (lineHeight / 2);
  
      // Scroll dengan animasi halus
      container.scrollTo({
        top: targetScrollTop,
        behavior: "smooth"
      });
    }
  }
  


audioPlayer.addEventListener('timeupdate', () => {
    if (audioPlayer.duration) {
        const progressPercent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        playerProgressBar.style.width = `${progressPercent}%`;
        playerCurrentTime.textContent = formatTime(audioPlayer.currentTime);
        
        // --- Logic highlight lirik ---
        const currentTime = audioPlayer.currentTime;
        const lyricLines = lyricsContainer.querySelectorAll('.lyric-line');
        let highlightedLine = null;

        lyricLines.forEach((line, index) => {
            const lineTime = parseFloat(line.getAttribute('data-time'));
            // Tentukan waktu berakhir baris lirik ini. Jika ini baris terakhir, anggap berakhir di akhir lagu.
            // Atau, lebih baik, anggap berakhir tepat sebelum baris berikutnya dimulai.
            let nextLineTime = Infinity; 
            if (index + 1 < lyricLines.length) {
                nextLineTime = parseFloat(lyricLines[index + 1].getAttribute('data-time'));
            }

            if (currentTime >= lineTime && currentTime < nextLineTime) {
                line.classList.add('highlight');
                highlightedLine = line;
            } else {
                line.classList.remove('highlight');
            }
        });

        // --- Auto-scroll lirik hanya jika baris yang disorot tidak terlihat ---
        if (highlightedLine) {
            const containerRect = lyricsContainer.getBoundingClientRect();
            const lineRect = highlightedLine.getBoundingClientRect();

            // Periksa apakah baris di luar viewport kontainer
            const isOutsideTop = lineRect.top < containerRect.top;
            const isOutsideBottom = lineRect.bottom > containerRect.bottom;

            if (isOutsideTop || isOutsideBottom) {
                // Scroll agar baris terdekat muncul di dalam viewport, dengan animasi smooth
                highlightedLine.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        }
    }
});

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

playerProgressBarContainer.addEventListener('click', (e) => {
    if (!audioPlayer.duration || songs.length === 0) return;
    const width = playerProgressBarContainer.clientWidth;
    const clickX = e.offsetX;
    audioPlayer.currentTime = (clickX / width) * audioPlayer.duration;
});

playerVolumeSlider.addEventListener('input', (e) => {
    audioPlayer.volume = e.target.value;
});

// Event Listener untuk slider kecepatan
playerSpeedSlider.addEventListener('input', (e) => {
    audioPlayer.playbackRate = parseFloat(e.target.value);
    currentSpeedDisplay.textContent = `${audioPlayer.playbackRate.toFixed(2)}x`;
});


playerShuffleBtn.addEventListener('click', () => {
    isShuffle = !isShuffle;
    playerShuffleBtn.classList.toggle('active-feature', isShuffle);
    console.log("Shuffle: " + isShuffle);
});

playerRepeatBtn.addEventListener('click', () => {
    repeatMode = (repeatMode + 1) % 3;
    updateRepeatButtonUI();
    console.log("Repeat Mode: " + repeatMode);
});

function updateRepeatButtonUI() {
    playerRepeatBtn.classList.remove('active-feature');
    audioPlayer.loop = false;

    if (repeatMode === 0) {
        playerRepeatBtn.innerHTML = '<i class="fas fa-repeat"></i>';
    } else if (repeatMode === 1) {
        playerRepeatBtn.innerHTML = '<i class="fas fa-repeat-1"></i>';
        playerRepeatBtn.classList.add('active-feature');
        audioPlayer.loop = true;
    } else {
        playerRepeatBtn.innerHTML = '<i class="fas fa-repeat"></i>';
        playerRepeatBtn.classList.add('active-feature');
    }
}

playerPlayPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
        pauseTrack();
    } else {
        playTrack();
    }
});
playerPrevBtn.addEventListener('click', prevTrack);
playerNextBtn.addEventListener('click', nextTrackLogic);

audioPlayer.addEventListener('ended', () => {
    if (repeatMode === 1) {
        // Handled by audio.loop = true
    } else {
        nextTrack();
    }
});

// Event Listeners untuk tombol navigasi
backToHomeFromDetailBtn.addEventListener('click', showHomePage); // Dari halaman detail ke home
backToHomeBtn.addEventListener('click', showHomePage); // Dari halaman player ke home

// Event Listener untuk tombol play dari halaman detail (jika Anda ingin menggunakannya)
playFromDetailBtn.addEventListener('click', () => {
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage();
});

// --- Initialization ---
function init() {
    console.log("Initializing..."); // Tambahkan log untuk inisialisasi
    console.log("Songs array length:", songs.length); // Periksa jumlah lagu
    console.log("songListElement:", songListElement); // Cek apakah songListElement ditemukan

    renderSongList(); // Ini yang merender daftar lagu
    
    if (songs.length > 0) {
        loadSong(songs[currentSongIndex]);
    } else {
        // Ini akan ditampilkan jika array songs kosong
        albumArtPlayer.src = "https://placehold.co/100x100/3a3a4e/e0e0e0?text=Musik";
        playerTrackTitle.textContent = "Tidak Ada Lagu";
        playerTrackArtist.textContent = "Tambahkan lagu";
        lyricsContainer.innerHTML = "<p>Silakan tambahkan lagu dari daftar.</p>";
    }
    audioPlayer.volume = playerVolumeSlider.value;
    audioPlayer.playbackRate = playerSpeedSlider.value; // Atur kecepatan awal
    currentSpeedDisplay.textContent = `${audioPlayer.playbackRate.toFixed(2)}x`; // Perbarui tampilan kecepatan
    updatePlayPauseIcon();
    updateRepeatButtonUI();
    showHomePage(); // Mulai dari halaman daftar lagu
    console.log("Initialization complete."); // Log selesai inisialisasi
}

init();