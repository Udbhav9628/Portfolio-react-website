import { OrbitControls, RenderTexture } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";

const Three = () => {
    const data = [
        {
            "status": "ok",
            "totalResults": 36,
            "articles": [
                {
                    "source": {
                        "id": "cnn",
                        "name": "CNN"
                    },
                    "author": "Peter Wilkinson,Luke McGee,Ivana Kottasová,Alex Hardie",
                    "title": "UK Prime Minister Rishi Sunak rocked by resignation of top ally Raab over bullying allegations - CNN",
                    "description": "British Prime Minister Rishi Sunak suffered a serious blow to his premiership on Friday as one of his closest allies resigned over allegations he bullied officials.",
                    "url": "https://www.cnn.com/2023/04/21/uk/uk-raab-bullying-report-intl-gbr/index.html",
                    "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230421045523-01-dominic-raab-041823-file-restricted.jpg?c=16x9&q=w_800,c_fill",
                    "publishedAt": "2023-04-21T09:54:00Z",
                    "content": "British Prime Minister Rishi Sunak suffered a serious blow to his premiership on Friday as one of his closest allies resigned over allegations he bullied officials.\r\nIn a resignation letter posted on… [+3898 chars]"
                },
                {
                    "source": {
                        "id": "fox-news",
                        "name": "Fox News"
                    },
                    "author": "Lawrence Richard",
                    "title": "Sudan conflict: Rapid Support Forces announces 72-hour truce as Sudanese general commits to civilian rule - Fox News",
                    "description": "Sudanese Armed Forces Commander Gen. Abdel Fattah al Burhan and Rapid Support Forces Commander Gen. Mohamed Hamdan Dagalo separately announced truces.",
                    "url": "https://www.foxnews.com/world/sudan-conflict-rapid-support-forces-announces-72-hour-truce-sudanese-general-commits-civilian-rule",
                    "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2023/04/AP23110365951982.jpg",
                    "publishedAt": "2023-04-21T09:47:00Z",
                    "content": "Military generals on both sides of the fighting in Sudan agreed to a temporary truce Friday, which coincides with the Muslim Eid al-Fitr holiday, marking the end of Ramadan.\r\nExplosions and gunfire r… [+4146 chars]"
                },
                {
                    "source": {
                        "id": "cnn",
                        "name": "CNN"
                    },
                    "author": "Chloe Melas",
                    "title": "Prosecutors dismissing charges against Alec Baldwin in 'Rust' shooting - CNN",
                    "description": "Involuntary manslaughter charges will be dismissed against actor Alec Baldwin, according to a statement from the New Mexico special prosecutors overseeing the cases in the \"Rust\" shooting.",
                    "url": "https://www.cnn.com/2023/04/20/entertainment/alec-baldwin-rust-charges/index.html",
                    "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/220120163711-alec-baldwin-dec-2021.jpg?c=16x9&q=w_800,c_fill",
                    "publishedAt": "2023-04-21T09:16:00Z",
                    "content": "Involuntary manslaughter charges will be dismissed against actor Alec Baldwin, according to a statement from the New Mexico special prosecutors overseeing the cases in the Rust shooting. \r\nCiting new… [+3846 chars]"
                },
                {
                    "source": {
                        "id": "al-jazeera-english",
                        "name": "Al Jazeera English"
                    },
                    "author": "Al Jazeera",
                    "title": "US deploys more troops to Djibouti for possible Sudan evacuation - Al Jazeera English",
                    "description": "US preparing to send additional troops to nearby Djibouti in case an evacuation of Americans from Sudan is needed.",
                    "url": "https://www.aljazeera.com/news/2023/4/21/us-prepares-troops-for-possible-sudan-embassy-evacuation",
                    "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2023/04/Sudan-1682065470.jpg?resize=1920%2C1440",
                    "publishedAt": "2023-04-21T08:45:38Z",
                    "content": "The United States is preparing to send a large number of additional troops to its military base in Djibouti in case of an eventual emergency evacuation from Sudan of American citizens.\r\nForces comman… [+3277 chars]"
                },
                {
                    "source": {
                        "id": "reuters",
                        "name": "Reuters"
                    },
                    "author": null,
                    "title": "Pope loses verified status on Twitter, US basketball star LeBron James remains - Reuters",
                    "description": "Twitter on Thursday began removing legacy blue checkmarks from user profiles, with famous people including pop icon Beyonce and Pope Francis losing their verified statuses.",
                    "url": "https://www.reuters.com/technology/pope-loses-verified-status-twitter-us-basketball-star-lebron-james-remains-2023-04-21/",
                    "urlToImage": "https://www.reuters.com/resizer/uB7Rso_cTvinVffJ5IFVDW8i_jQ=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/I3XH2N36Z5LGVKFH3HUBXLRI4M.jpg",
                    "publishedAt": "2023-04-21T08:27:00Z",
                    "content": "April 20 (Reuters) - Twitter on Thursday began removing legacy blue checkmarks from user profiles, with famous people including pop icon Beyonce and Pope Francis losing their verified statuses.\r\nSome… [+2135 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "New York Post"
                    },
                    "author": "Katherine Donlevy",
                    "title": "Robert Singletary, neighbor accused of shooting 6-year-old, parents over basketball, arrested - New York Post ",
                    "description": "Robert Louis Singletary, 24, handed himself over to authorities in Tampa, over 560 miles from where he allegedly opened fire on his neighbors, police said.",
                    "url": "https://nypost.com/2023/04/21/robert-singletary-accused-of-shooting-child-parents-over-basketball-arrested/",
                    "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2023/04/newspress-collage-26691863-1682057695028.jpg?quality=75&strip=all&1682043363&w=1024",
                    "publishedAt": "2023-04-21T06:20:00Z",
                    "content": "A North Carolina man who allegedly fired shots at a 6-year-old and her parents after a basketball rolled into his yard turned himself in at a Florida police station Thursday after two days on the lam… [+2395 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "YouTube"
                    },
                    "author": null,
                    "title": "K-pop star Moonbin mourned in the Philippines after suspected suicide - South China Morning Post",
                    "description": "Subscribe to our YouTube channel for free here: https://sc.mp/subscribe-youtubeOver a hundred fans gathered in the Philippine capital Manila on April 20, 202...",
                    "url": "https://www.youtube.com/watch?v=84w1t9nD0a0",
                    "urlToImage": "https://i.ytimg.com/vi/84w1t9nD0a0/maxresdefault.jpg",
                    "publishedAt": "2023-04-21T06:03:29Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "Yahoo Entertainment"
                    },
                    "author": "Jack Baer",
                    "title": "NBA playoffs: Warriors cruise to Game 3 win vs. Kings without Draymond Green - Yahoo Sports",
                    "description": "The Warriors have life again.",
                    "url": "https://sports.yahoo.com/nba-playoffs-warriors-cruise-to-game-3-win-vs-kings-without-draymond-green-043709548.html",
                    "urlToImage": "https://s.yimg.com/ny/api/res/1.2/XU_hkLazhwWCXtNgozMMbg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2023-04/aecd1830-dffd-11ed-bdff-1c3a7f3e4f71",
                    "publishedAt": "2023-04-21T04:37:00Z",
                    "content": "The Golden State Warriors aren't done yet.\r\nWith Draymond Green suspended and their backs against the wall in their first-round series against the Sacramento Kings, the Warriors pulled out a 114-97 w… [+2282 chars]"
                },
                {
                    "source": {
                        "id": "cnn",
                        "name": "CNN"
                    },
                    "author": "Radina Gigova,Victoria Butenko,Josh Pennington,Brad Lendon",
                    "title": "Russian jet drops bomb on Russian city, state media says - CNN",
                    "description": "A Russian warplane dropped a bomb on a Russian city of more than 400,000 people late Thursday, leaving a crater 40 meters (130 feet) across, blowing a car onto a roof and damaging buildings in what state media called an \"emergency release of an air ordnance.\"",
                    "url": "https://www.cnn.com/2023/04/20/europe/russia-belgorod-accidental-bombing-intl-hnk/index.html",
                    "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230421111743-belgorod-explosion-0421.jpg?c=16x9&q=w_800,c_fill",
                    "publishedAt": "2023-04-21T04:24:00Z",
                    "content": "A Russian warplane dropped a bomb on a Russian city of more than 400,000 people late Thursday, leaving a crater 40 meters (130 feet) across, blowing a car onto a roof and damaging buildings in what s… [+3830 chars]"
                },
                {
                    "source": {
                        "id": "bloomberg",
                        "name": "Bloomberg"
                    },
                    "author": null,
                    "title": "Tesla Increases Price of Model S, X in US After Shares Slump - Bloomberg",
                    "description": "Tesla Inc. increased prices of its Model S and X vehicles in the US after steep markdowns early this year took a toll on profitability and the carmaker’s shares.",
                    "url": "https://www.bloomberg.com/news/articles/2023-04-21/tesla-increases-price-of-model-s-x-in-us-after-shares-slump",
                    "urlToImage": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iabNXXWnJhm8/v1/1200x800.jpg",
                    "publishedAt": "2023-04-21T04:22:00Z",
                    "content": "Tesla Inc. increased prices of its Model S and X vehicles in the US after steep markdowns early this year took a toll on profitability and the carmaker’s shares.\r\nTesla bumped up each variant of its … [+196 chars]"
                },
                {
                    "source": {
                        "id": "usa-today",
                        "name": "USA Today"
                    },
                    "author": "Cydney Henderson and Jace Evans, USA TODAY",
                    "title": "James Harden ejected; Joel Embiid receives flagrant foul for kicking Nets' Nic Claxton - USA TODAY",
                    "description": "Joel Embiid received a flagrant foul for kicking Nets' Nic Claxton. Later, James Harden was ejected for a foul, a decision he called \"unacceptable.\"",
                    "url": "https://www.usatoday.com/story/sports/nba/playoffs/2023/04/20/joel-embiid-kicks-nic-claxton-flagrant-foul/11708291002/",
                    "urlToImage": "https://www.gannett-cdn.com/presto/2023/04/21/USAT/32c242d4-4aa4-4f6b-a68e-701d6d0b04d7-USP_NBA__Playoffs-Philadelphia_76ers_at_Brooklyn_N.jpg?auto=webp&crop=3229,1816,x0,y96&format=pjpg&width=1200",
                    "publishedAt": "2023-04-21T01:30:00Z",
                    "content": "Things got chippy early in the Philadelphia 76ers' 102-97 Game 3 win over the Brooklyn Nets, and the physical play continued throughout the contest, eventually earning an ejection for Sixers star Jam… [+3929 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "SciTechDaily"
                    },
                    "author": null,
                    "title": "Dark Order in the Universe: Distant Galaxies Align To Support Einstein's General Relativity - SciTechDaily",
                    "description": "Scientists have confirmed that intrinsic alignments of galaxies can probe dark matter and dark energy on a cosmological scale, supporting general relativity at vast spatial scales. However, the nature of dark energy and cosmic acceleration remains unresolved.…",
                    "url": "https://scitechdaily.com/?p=270069",
                    "urlToImage": "https://scitechdaily.com/images/Dark-Order-in-Universe-Galaxy-Alignment.jpg",
                    "publishedAt": "2023-04-21T01:04:12Z",
                    "content": "3D position and shape information for each galaxy helped to measure the magnitude of alignment relative to distant galaxies. Credit: KyotoU/Jake Tobiyama\r\nScientists have confirmed that intrinsic ali… [+2924 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "The Guardian"
                    },
                    "author": "Samuel Okiror",
                    "title": "Uganda’s president rejects new hardline anti-gay bill as not tough enough - The Guardian",
                    "description": "Yoweri Museveni sends bill imposing death penalty for homosexuality back to parliament",
                    "url": "https://www.theguardian.com/global-development/2023/apr/20/ugandas-president-refuses-to-sign-new-hardline-anti-gay-bill",
                    "urlToImage": "https://i.guim.co.uk/img/media/a3e4b774bfb8b9be71aaf662cf5bff7eb3ee42f9/0_38_5451_3272/master/5451.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=fb4f1a05f9e023d0d557d194c468073b",
                    "publishedAt": "2023-04-21T00:55:00Z",
                    "content": "Ugandas president, Yoweri Museveni, has refused to sign into law a controversial anti-LGBTQ+ bill that imposes the death penalty for homosexuality, requesting that it be returned to parliament to mak… [+5028 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "PBS"
                    },
                    "author": null,
                    "title": "Trans lawmaker silenced by Montana House speaker as Legislature debates gender-affirming care ban - PBS NewsHour",
                    "description": "Speaker Matt Regier said Thursday he would not recognize any representative that he doesn't feel can \"maintain decorum.\"",
                    "url": "https://www.pbs.org/newshour/politics/trans-lawmaker-silenced-by-montana-house-speaker-as-legislature-debates-gender-affirming-care-ban",
                    "urlToImage": "https://d3i6fh83elv35t.cloudfront.net/static/2023/04/GettyImages-1404386591-1024x640.jpg",
                    "publishedAt": "2023-04-21T00:47:01Z",
                    "content": "HELENA, Mont. (AP) Montanas House speaker refused to allow a transgender lawmaker to speak on a bill Thursday, two days after a conservative group of lawmakers deliberately misgendered her and called… [+3228 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "SportsLine"
                    },
                    "author": null,
                    "title": "Kings vs. Warriors prediction, odds, line, start time: Advanced computer model releases NBA picks for Thursday, April 20, Game 3 first-round matchup - SportsLine",
                    "description": "The Sacramento Kings will look to take a commanding 3-0 series lead when they meet the Golden State Warriors in their Western Conference first-ro...",
                    "url": "https://www.sportsline.com/insiders/kings-vs-warriors-prediction-odds-line-start-time-advanced-computer-model-releases-nba-picks-for-thursday-april-20-game-3-first-round-matchup/",
                    "urlToImage": "https://splnhub.cbsistatic.com/i/2023/04/15/a518253e-2237-4907-9d63-169c866f3376/stephen-curry-golden-state-warriors-usatsi.jpg",
                    "publishedAt": "2023-04-21T00:25:00Z",
                    "content": "The Sacramento Kings will look to take a commanding 3-0 series lead when they meet the Golden State Warriors in their Western Conference first-round matchup on Thursday. The Kings (48-34), who finish… [+2186 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "BBC News"
                    },
                    "author": "https://www.facebook.com/bbcnews",
                    "title": "Northern elephant seals sleep in the deep to avoid predators - BBC",
                    "description": "Northern elephant seals sleep underwater for just two hours per day on their months-long foraging journeys.",
                    "url": "https://www.bbc.com/news/science-environment-65338500",
                    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/126D0/production/_129427457_mediaitem129427456.jpg",
                    "publishedAt": "2023-04-21T00:13:35Z",
                    "content": "Northern elephant seals sleep while drifting hundreds of metres below the sea surface - at depths where their predators do not usually lurk. \r\nUS researchers tracked the animals, recording their brai… [+1950 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Yahoo Entertainment"
                    },
                    "author": "Kat Pettibone",
                    "title": "Taylor Swift Is ‘Enjoying Her Freedom’ After Her Split From Joe Alwyn, Is ‘Optimistic’ About Her Future - Yahoo Entertainment",
                    "description": "Not so delicate. Taylor Swift is shaking it off following her split from Joe Alwyn — and settling in nicely to her newly single status. “Taylor is handling...",
                    "url": "https://www.yahoo.com/entertainment/taylor-swift-enjoying-her-freedom-230926039.html",
                    "urlToImage": "https://s.yimg.com/ny/api/res/1.2/bAnMmPsxP8vqqCcVrg8PnA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD0xMjAw/https://media.zenfs.com/en/us_magazine_896/069d5bd2bfa51022f7ec4ff9e26908a0",
                    "publishedAt": "2023-04-20T23:09:26Z",
                    "content": "Taylor Swift and Joe Alwyn.ZUMAPRESS/MEGA; David Fisher/BAFTA/Shutterstock\r\nNot so delicate. Taylor Swift is shaking it off following her split from Joe Alwyn and settling in nicely to her newly sing… [+4614 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "YouTube"
                    },
                    "author": null,
                    "title": "MyPillow CEO Mike Lindell ordered to pay $5 million for losing false election challenge - CNN",
                    "description": "MyPillow CEO Mike Lindell has been ordered to pay $5 million to an expert who debunked his data related to the 2020 election, according to a decision by the ...",
                    "url": "https://www.youtube.com/watch?v=BSB9Yeky624",
                    "urlToImage": "https://i.ytimg.com/vi/BSB9Yeky624/maxresdefault.jpg",
                    "publishedAt": "2023-04-20T23:00:05Z",
                    "content": null
                },
                {
                    "source": {
                        "id": "cnn",
                        "name": "CNN"
                    },
                    "author": "Katherine Dillinger",
                    "title": "Narcan nasal spray maker aims for over-the-counter price of less than $50 - CNN",
                    "description": "Emergent, the maker of the opioid overdose antidote Narcan, said in a statement Thursday that it is aiming for an out-of-pocket price of less than $50 for its nasal spray product now that the US Food and Drug Administration allows for over-the-counter sales.",
                    "url": "https://www.cnn.com/2023/04/20/health/narcan-price/index.html",
                    "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230420184434-narcan-file-restricted.jpg?c=16x9&q=w_800,c_fill",
                    "publishedAt": "2023-04-20T22:59:00Z",
                    "content": "Emergent, the maker of the opioid overdose antidote Narcan, said in a statement Thursday that it is aiming for an out-of-pocket price of less than $50 for its nasal spray product now that the US Food… [+3825 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "New York Post"
                    },
                    "author": "Asia Grace",
                    "title": "Vanessa Lachey blasted for pregnancy questions at 'Love is Blind' reunion - New York Post ",
                    "description": "Women on TikTok who’ve experienced fertility issues slammed Lachey’s baby questions for the show’s couples.",
                    "url": "https://nypost.com/2023/04/20/vanessa-lachey-blasted-for-baby-talk-at-love-is-blind-reunion/",
                    "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2023/04/NYPICHPDPICT000009921966.jpg?quality=75&strip=all&w=1024",
                    "publishedAt": "2023-04-20T22:35:00Z",
                    "content": "Vanessa Lachey had a lot to say and a lot of it rubbed the infertility community the wrong way. \r\nFor hounding the cast of Netflixs Love is Blind with questions about which of the newlyweds would be … [+4150 chars]"
                }
            ]
        }
    ]

    useEffect(() => {
        console.log(data[0].articles[0].author);

    }, [])

    return (
        <div className='threeContainer'>
            <Canvas children={<mesh>
                <OrbitControls enableZoom={false} autoRotate />
                <ambientLight intensity={1} />
                <directionalLight color={'white'} intensity={2} position={[3, 2, 1]} />
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial>
                    <RenderTexture children={<color attach={'background'} args={['pink']}></color>} sourceFile={undefined}></RenderTexture>
                </meshStandardMaterial>
            </mesh>}></Canvas>
        </div>
    )
}

export default Three