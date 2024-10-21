
const news = [
    {
        source: {
        id: "wired",
        name: "Wired"
        },
        author: "Joel Khalili",
        title: "Unmasking Bitcoin Creator Satoshi Nakamoto—Again",
        description: "A new HBO documentary takes a swing at uncovering the real identity of Satoshi Nakamoto, inventor of Bitcoin. But without incontrovertible proof, the myth lives on.",
        url: "https://www.wired.com/story/unmasking-bitcoin-creator-satoshi-nakamoto-again/",
        urlToImage: "https://media.wired.com/photos/6703eb3979f13fda7f04485b/191:100/w_1280,c_limit/Satoshi-Nakamoto-biz-1341874258.jpg",
        publishedAt: "2024-10-09T01:00:00Z",
        content: "Peter Todd is standing on the upper floor of a dilapidated industrial building somewhere in Czechia, chuckling under his breath. He has just been accused on camera of being Satoshi Nakamoto, the Bitc… [+3043 chars]"
    },
    {
        source: {
        id: null,
        name: "Gizmodo.com"
        },
        author: "Matthew Gault",
        title: "Controversial HBO Documentary Concludes Peter Todd Invented Bitcoin",
        description: "The cryptocurrency community is not amused.",
        url: "https://gizmodo.com/controversial-hbo-documentary-concludes-peter-todd-invented-bitcoin-2000509751",
        urlToImage: "https://gizmodo.com/app/uploads/2024/10/PeterToddHBO.jpg",
        publishedAt: "2024-10-09T14:05:37Z",
        content: "Last night, HBO aired a documentary about Bitcoin that claimed to reveal the identity of the cryptocurrencys anonymous creator Satoshi Nakamoto. In Money Electric, journalist Cullen Hoback chased the… [+3152 chars]"
    },
    {
        source: {
        id: null,
        name: "Gizmodo.com"
        },
        author: "Lucas Ropek",
        title: "New HBO Doc Promises to Unmask the Mysterious Inventor of Bitcoin",
        description: "Who invented crypto? A filmmaker believes he's cracked the case.",
        url: "https://gizmodo.com/new-hbo-doc-promises-to-unmask-the-mysterious-inventor-of-bitcoin-2000507216",
        urlToImage: "https://gizmodo.com/app/uploads/2024/10/A-Statue-of-the-Mysterious-Bitcoin-Inventor-Satoshi-Nakamoto-in-Budapest-Park.jpg",
        publishedAt: "2024-10-04T13:35:42Z",
        content: "The world has long wondered who created Bitcoin. Ever since a white paper bearing his name was published on the web in 2008, the digital asset’s conception has widely been attributed to a pseudonymou… [+2431 chars]"
    },
    {
        source: {
        id: null,
        name: "CNET"
        },
        author: "Samantha Kelly",
        title: "PayPal to Allow Businesses Buy and Sell Crypto",
        description: "The change will bring bitcoin and other virtual coins to \"millions\" of merchants across the US.",
        url: "https://www.cnet.com/personal-finance/crypto/paypal-to-allow-businesses-buy-and-sell-crypto/",
        urlToImage: "https://www.cnet.com/a/img/resize/2b2ba45973ffae7baacd4449b399bd35435e4fa0/hub/2022/04/22/d7acb748-e7bd-4553-ae44-2f893ccb87ba/paypal-logo-2022-659.jpg?auto=webp&fit=crop&height=675&width=1200",
        publishedAt: "2024-09-26T15:12:00Z",
        content: "It's about to get easier for US merchants to use cryptocurrency for payments. PayPal is launching a new service to allow the businesses that use its platform to buy, hold and sell crypto. \r\nAlthough … [+1029 chars]"
    },
    {
        source: {
            id: null,
            name: "[Removed]"
        },
        author: null,
        title: "[Removed]",
        description: "[Removed]",
        url: "https://removed.com",
        urlToImage: null,
        publishedAt: "2024 -09 - 17T13:00: 22Z",
        content: "[Removed]"
    },
    {
        "source": {
            "id": null,
            "name": "Slashdot.org"
        },
        "author": "msmash",
        "title": "Government of Bhutan Holds Over $825 Million, or Nearly a Third of Its GDP, in Bitcoin, Arkham Data Shows",
        "description": "The government of Bhutan is currently holding over $828 million in bitcoin, according to onchain data by Arkham Intelligence. From a report: \"Unlike most governments, Bhutan's BTC does not come from law enforcement asset seizures, but from bitcoin mining oper…",
        "url": "https://slashdot.org/story/24/09/23/1940238/government-of-bhutan-holds-over-825-million-or-nearly-a-third-of-its-gdp-in-bitcoin-arkham-data-shows",
        "urlToImage": "https://a.fsdn.com/sd/topics/bitcoin_64.png",
        "publishedAt": "2024-09-23T20:05:00Z",
        "content": "The government of Bhutan is currently holding over $828 million in bitcoin, according to onchain data by Arkham Intelligence. From a report: \"Unlike most governments, Bhutan's BTC does not come from … [+1208 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Gizmodo.com"
        },
        "author": "Lucas Ropek",
        "title": "Infamous Tech Bro Starts School That Teaches How to Crowdfund Your Own Country",
        "description": "A well-funded free market doctrine is getting its own mysterious educational platform.",
        "url": "https://gizmodo.com/infamous-tech-bro-starts-school-that-teaches-how-to-crowdfund-your-own-country-2000502383",
        "urlToImage": "https://gizmodo.com/app/uploads/2024/09/Balaji-Srinivasan-during-the-Fintech-Festival-in-Singapore.jpg",
        "publishedAt": "2024-09-24T13:35:22Z",
        "content": "Balaji Srinivasan, the former chief technology officer of Coinbase, is a weird guy. He’s talked about living forever. He helped finance a pro-steroids athletic competition. And he once threw away a m… [+3090 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Slashdot.org"
        },
        "author": "BeauHD",
        "title": "Mystery Creator of Bitcoin Identified, New HBO Documentary Claims",
        "description": "A new HBO documentary directed by Emmy-nominated filmmaker Cullen Hoback claims to have revealed the true identity of the pseudonymous creator of Bitcoin, Satoshi Nakamoto. As Politico notes, Hoback \"drew critical acclaim for his series 'Q: Into the Storm' th…",
        "url": "https://slashdot.org/story/24/10/03/2330200/mystery-creator-of-bitcoin-identified-new-hbo-documentary-claims",
        "urlToImage": "https://a.fsdn.com/sd/topics/bitcoin_64.png",
        "publishedAt": "2024-10-04T00:02:00Z",
        "content": "[T]he exposure of Satoshi as its alleged creator threatens to raise some huge questions, not least his potential complicity in crimes that have featured Bitcoin use. It could also establish him as on… [+986 chars]"
    },
    {
        "source": {
            "id": "business-insider",
            "name": "Business Insider"
        },
        "author": "abharade@insider.com (Aditi Bharade,Kwan Wei Kevin Tan)",
        "title": "Trump flip-flopped on crypto, but his PAC has raked in millions of dollars of crypto donations since June",
        "description": "The former president has positioned himself as the pro-crypto candidate this election cycle. But he hasn't always had nice things to say about crypto.",
        "url": "https://www.businessinsider.com/trump-pac-raised-millions-crypto-donations-since-june-2024-10",
        "urlToImage": "https://i.insider.com/670f5459a70318649282ad0f?width=1200&format=jpeg",
        "publishedAt": "2024-10-16T09:44:31Z",
        "content": "A political action committee called Trump 47 has raised $7.5 million in cryptocurrency donations for former President Donald Trump's White House bid.\r\nAccording to Federal Election Commission filings… [+3227 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Hipertextual"
        },
        "author": "Quelian Sanz",
        "title": "HBO revela el mayor misterio sobre Bitcoin, ¿quién es realmente Satoshi Nakamoto?",
        "description": "Bitcoin es la criptomoneda más popular del planeta, y también una de las más transparentes para el usuario. Se sabe casi todo sobre ella, sus transacciones son públicas, se conoce cuántas hay en circulación y muchísimos detalles sobre su dinámica. Pero a día …",
        "url": "http://hipertextual.com/2024/10/hbo-revela-el-mayor-misterio-sobre-bitcoin-quien-es-realmente-satoshi-nakamoto",
        "urlToImage": "https://imgs.hipertextual.com/wp-content/uploads/2024/10/bitcoin-creador-scaled.jpg",
        "publishedAt": "2024-10-09T12:09:45Z",
        "content": "Bitcoin es la criptomoneda más popular del planeta, y también una de las más transparentes para el usuario. Se sabe casi todo sobre ella, sus transacciones son públicas, se conoce cuántas hay en circ… [+2064 chars]"
    },
    {
        "source": {
            "id": "wired",
            "name": "Wired"
        },
        "author": "Alistair Charlton",
        "title": "Trump's $100,000 Watches Are the Most Tragic Celebrity Watch Yet",
        "description": "Former president Donald Trump wants you to buy gaudy, overpriced timepieces “made for those who combine boldness and elegance.” He got one part right.",
        "url": "https://www.wired.com/story/trumps-dollar100000-watches-are-the-most-tragic-celebrity-watch-yet/",
        "urlToImage": "https://media.wired.com/photos/66f6c5b5c143415d72625aca/191:100/w_1280,c_limit/trump-watches-pol.jpg",
        "publishedAt": "2024-09-27T17:48:08Z",
        "content": "Celebrities partnering with watch brands is nothing new. Sometimes a bona fide watch enthusiast like John Mayer partners with Audemars Piguet, or Ed Sheeran (owner of a unique Patek Philippe, no less… [+2694 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Gizmodo.com"
        },
        "author": "Joe Tilleli",
        "title": "Wall Street in Your Pocket: The Tykr Stock Screener App Will Teach You to Earn Back the Money You Spent on Its Lifetime Plan",
        "description": "Save 83% and an additional $30 when you sign up for the Tykr Stock Screener premium plan lifetime subscription with this code.",
        "url": "https://gizmodo.com/wall-street-in-your-pocket-the-tykr-stock-screener-app-will-teach-you-to-earn-back-the-money-you-spent-on-its-lifetime-plan-2000505735",
        "urlToImage": "https://gizmodo.com/app/uploads/2024/10/Tykr.jpg",
        "publishedAt": "2024-10-01T18:18:47Z",
        "content": "Just starting out with stock trading can be an overwhelming experience. Knowing what stocks are good and bad and knowing when to buy or sell doesn’t come naturally. You can work with a financial advi… [+2251 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Bitcoindevs.xyz"
        },
        "author": "BDP",
        "title": "Decoding Bitcoin: An interactive, exercise-heavy approach to learning Bitcoin",
        "description": "Simplifying bitcoin tech to help you learn as efficiently as possible",
        "url": "https://bitcoindevs.xyz/decoding/decoding/1-welcome",
        "urlToImage": "https://bitcoindevs.xyz/images/pages-thumbnails/topics.png",
        "publishedAt": "2024-10-07T17:46:16Z",
        "content": "Welcome to Decoding Bitcoin, your go-to resource for understanding bitcoin, Privacy, and Decentralization. We're here to break down complex bitcoin concepts and provide straightforward explanations t… [+708 chars]"
    },
    {
        "source": {
            "id": "time",
            "name": "Time"
        },
        "author": "Andrew R. Chow",
        "title": "Documentarian Says He’s Solved the Mystery of Bitcoin’s Creator. Insiders Are Extremely Skeptical.",
        "description": "Cullen Hoback's new documentary argues Bitcoin's Satoshi Nakamoto has been hiding in plain sight all along.",
        "url": "https://time.com/7064841/satoshi-nakamoto-hbo-money-electric/",
        "urlToImage": "https://api.time.com/wp-content/uploads/2024/10/peter-todd.jpeg?quality=85&w=1200&h=628&crop=1",
        "publishedAt": "2024-10-09T01:01:00Z",
        "content": "This article contains spoilers for Money Electric: The Bitcoin Mystery.\r\nWho is Bitcoins founder, Satoshi Nakamoto? The question has perplexed and excited cryptocurrency fans ever since Bitcoin was c… [+12372 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Xataka.com"
        },
        "author": "Javier Pastor",
        "title": "La identidad del creador de bitcoin siempre ha sido un misterio. HBO promete revelarla muy pronto",
        "description": "En 2008 alguien que usaba como pseudónimo Satoshi Nakamoto reveló al mundo su creación: el bitcoin. Esta criptomoneda ha acabado provocando una singular revolución en nuestra economía, pero la identidad real de su creador jamás se ha revelado. Ahora hay una n…",
        "url": "https://www.xataka.com/criptomonedas/identidad-creador-bitcoin-siempre-ha-sido-misterio-hbo-promete-revelarla-muy-pronto",
        "urlToImage": "https://i.blogs.es/8cf13f/btc/840_560.jpeg",
        "publishedAt": "2024-10-04T16:30:51Z",
        "content": "En 2008 alguien que usaba como pseudónimo Satoshi Nakamoto reveló al mundo su creación: el bitcoin. Esta criptomoneda ha acabado provocando una singular revolución en nuestra economía, pero la identi… [+2425 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Xataka.com"
        },
        "author": "Enrique Pérez",
        "title": "El candidato a Satoshi Nakamoto más querido por la comunidad Bitcoin: el cypherpunk que fue inmortalizado en blockchain",
        "description": "En julio de 2011, Leonard Harris \"Len\" Sassaman decidió quitarse la vida. Tenía 31 años, pero ya llevaba una larga batalla contra la depresión. Quienes lo conocieron explican que Len era \"un auténtico Cypherpunk: brillante, irreverente e idealista a partes ig…",
        "url": "https://www.xataka.com/criptomonedas/candidato-a-satoshi-nakamoto-querido-comunidad-bitcoin-cypherpunk-que-fue-inmortalizado-blockchain",
        "urlToImage": "https://i.blogs.es/d0f570/len_sassaman_ascii/840_560.jpeg",
        "publishedAt": "2024-10-13T17:01:49Z",
        "content": "En julio de 2011, Leonard Harris \"Len\" Sassaman decidió quitarse la vida. Tenía 31 años, pero ya llevaba una larga batalla contra la depresión. Quienes lo conocieron explican que Len era \"un auténtic… [+4010 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Xataka.com"
        },
        "author": "Javier Pastor",
        "title": "En HBO creen que Peter Todd es el creador de bitcoin. Su respuesta: \"por supuesto que no soy Satoshi\"",
        "description": "Ya sabemos cuál es la identidad real de Satoshi Nakamoto, el creador de bitcoin. O al menos eso es lo que asegura un nuevo y recién estrenado documental de HBO titulado 'Dinero electrónico: el misterio del Bitcoin'. Y una vez más, que los responsables del doc…",
        "url": "https://www.xataka.com/criptomonedas/hbo-creen-que-peter-todd-creador-bitcoin-su-respuesta-supuesto-que-no-soy-satoshi",
        "urlToImage": "https://i.blogs.es/955483/todd-11/840_560.jpeg",
        "publishedAt": "2024-10-09T06:40:54Z",
        "content": "Ya sabemos cuál es la identidad real de Satoshi Nakamoto, el creador de bitcoin. O al menos eso es lo que asegura un nuevo y recién estrenado documental de HBO titulado 'Dinero electrónico: el mister… [+3046 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Xataka.com"
        },
        "author": "Javier Marquez",
        "title": "Alguien ha montado una enorme mina de Bitcoin en un pueblo de Texas. Los vecinos dicen que el ruido les está arruinando la vida",
        "description": "La fiebre del bitcoin parece haber pedido fuerza por estos días. Después de la aprobación de los ETF y del precio récord que superó la barrera de los 69.000 dólares no se ha hablado demasiado de esta criptomoneda. Los vecinos de Granbury, una pequeña ciudad s…",
        "url": "https://www.xataka.com/criptomonedas/alguien-ha-montado-enorme-mina-bitcoin-pueblo-texas-vecinos-dicen-que-ruido-les-esta-arruinando-vida",
        "urlToImage": "https://i.blogs.es/4fcb29/1mina-de-bitcoin-portada/840_560.jpeg",
        "publishedAt": "2024-10-09T06:31:13Z",
        "content": "La fiebre del bitcoin parece haber pedido fuerza por estos días. Después de la aprobación de los ETF y del precio récord que superó la barrera de los 69.000 dólares no se ha hablado demasiado de esta… [+2389 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Yahoo Entertainment"
        },
        "author": "CoinDesk",
        "title": "Why Are Bitcoin Miners Rushing to Add Bitcoin to Their Bags?",
        "description": "CoinDesk's Jennifer Sanasie discusses the wave of bitcoin miners adopting Michael Saylor's strategy of accumulating BTC from the open market. Plus, what that...",
        "url": "https://finance.yahoo.com/video/why-bitcoin-miners-rushing-add-211041352.html/",
        "urlToImage": "https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo.png",
        "publishedAt": "2024-09-17T21:10:41Z",
        "content": "CoinDesk's Jennifer Sanasie discusses the wave of bitcoin miners adopting Michael Saylor's strategy of accumulating BTC from the open market. Plus, what that means for bitcoin as a long-term investme… [+156 chars]"
    },
    {
        "source": {
            "id": "wired",
            "name": "Wired"
        },
        "author": "Andy Greenberg, Lily Hay Newman, Dhruv Mehrotra",
        "title": "Iranian Hackers Tried to Give Hacked Trump Campaign Emails to Dems",
        "description": "Plus: The FBI dismantles the largest-ever China-backed botnet, the DOJ charges two men with a $243 million crypto theft, Apple’s MacOS Sequoia breaks cybersecurity tools, and more.",
        "url": "https://www.wired.com/story/iran-hackers-trump-democrats-emails/",
        "urlToImage": "https://media.wired.com/photos/66ed82cf42ad37094e1a41eb/191:100/w_1280,c_limit/GettyImages-2172740225.jpg",
        "publishedAt": "2024-09-21T10:30:00Z",
        "content": "The week was dominated by news that thousands of pagers, walkie-talkies and other devices were exploding across Lebanon on Tuesday and Wednesday in an attack targeting the militant group Hezbollah. A… [+6624 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Theregister.com"
        },
        "author": "Brandon Vigliarolo",
        "title": "Bitcoin creator suspect says he is not Bitcoin creator suspect",
        "description": "'If I was Satoshi I would have destroyed my ability to prove I'm Satoshi'\nThe man identified as Bitcoin creator Satoshi Nakamoto in a new HBO documentary has something to say: Wrong again, world.…",
        "url": "https://www.theregister.com/2024/10/09/satoshi_nakamoto_suspect_hbo_bitcoin/",
        "urlToImage": "https://regmedia.co.uk/2016/06/06/bitcoinsstack.jpg",
        "publishedAt": "2024-10-09T17:00:08Z",
        "content": "The man identified as Bitcoin creator Satoshi Nakamoto in a new HBO documentary has something to say: Wrong again, world.\r\nIn the just-released HBO film on the history of the world's biggest digital … [+6425 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Blockhead.co"
        },
        "author": "Perion Lim",
        "title": "New HBO Documentary Claims Bitcoin Creator Satoshi Nakamoto Is Len Sassaman",
        "description": "HBO's upcoming documentary, 'Money Electric: The Bitcoin Mystery', claims the real Satoshi Nakamoto is Len Sassaman, who tragically took his life in 2011",
        "url": "https://www.blockhead.co/2024/10/05/new-bitcoin-documentary-to-sheds-more-light-on-satoshi-nakamotos-identity/",
        "urlToImage": "https://www.blockhead.co/content/images/size/w1200/2024/10/Lens-Sassaman.jpg",
        "publishedAt": "2024-10-05T12:13:02Z",
        "content": "A new HBO documentary titled Money Electric: The Bitcoin Mystery is set to reveal the real identity of the anonymous creator of Bitcoin. The identity of Satoshi Nakamoto has long been debated within … [+2996 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Gizmodo.com"
        },
        "author": "Matt Novak",
        "title": "Truth Social Users Are Losing Ridiculous Sums of Money to Scams",
        "description": "Read the complaints submitted to the FTC by users of Donald Trump's social media platform.",
        "url": "https://gizmodo.com/truth-social-users-are-losing-ridiculous-sums-of-money-to-scams-2000506604",
        "urlToImage": "https://gizmodo.com/app/uploads/2024/10/donald-trump-october-3-2024.jpg",
        "publishedAt": "2024-10-05T13:00:34Z",
        "content": "Donald Trump launched Truth Social in 2022 as a social media platform where the MAGA faithful could hang out without any liberals to spoil the fun. The biggest selling point? It was the only place wh… [+30292 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "heise online"
        },
        "author": "Alexander Spier",
        "title": "heise+ | Heizlüfter mit Bitcoin-Miner: Ofen Pro von 21energy im Test​",
        "description": "Die Wohnung gemütlich heizen und damit Geld verdienen? Der Ofen Pro von 21energy schürft Bitcoins und gibt dabei Wärme ab. So sollen die Heizkosten sinken.​",
        "url": "https://www.heise.de/tests/Heizluefter-mit-Bitcoin-Miner-Ofen-Pro-von-21energy-im-Test-9968169.html?wt_mc=rss.red.ho.ho.atom.beitrag_plus.beitrag_plus",
        "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/6/8/3/2/6/2/PXL_20241008_110936111-EDIT-3abd22e5fe6d777d.jpg",
        "publishedAt": "2024-10-09T05:30:00Z",
        "content": "Inhaltsverzeichnis\r\nDas Heizen der Wohnung im Winter kostet viel Energie, das Schürfen von Bitcoins auch: Warum also nicht beides verbinden und mit der Abwärme vom Bitcoin-Mining die Wohnung wärmen u… [+1369 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Yahoo Entertainment"
        },
        "author": "Kellan Jansen",
        "title": "Suze Orman: 1 Reason You Should ‘Absolutely’ Own Bitcoin",
        "description": "Suze Orman is a financial host and author, and in a recent interview with CNBC, she said she believes \"everyone should absolutely\" own the cryptocurrency...",
        "url": "https://finance.yahoo.com/news/suze-orman-1-reason-absolutely-140020553.html/",
        "urlToImage": "https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo.png",
        "publishedAt": "2024-09-23T14:00:20Z",
        "content": "Suze Orman is a financial host and author, and in a recent interview with CNBC, she said she believes everyone should absolutely own the cryptocurrency bitcoin. Usually, people who support bitcoin as… [+3271 chars]"
    },
    {
        "source": {
            "id": "business-insider",
            "name": "Business Insider"
        },
        "author": "Dan DeFrancesco",
        "title": "An incoming 'M&A supercycle' wouldn't just be a win for dealmakers",
        "description": "Goldman Sachs' earnings hint at the revival of the M&A market, which could help companies big and small.",
        "url": "https://www.businessinsider.com/goldman-sachs-earnings-dealmaking-benefit-economy-2024-10",
        "urlToImage": "https://i.insider.com/670fa446a70318649282b2f4?width=1000&format=jpeg",
        "publishedAt": "2024-10-16T11:33:31Z",
        "content": "Illustration by Budrul Chukrut/SOPA Images/LightRocket via Getty Images\r\n<ul><li>This post originally appeared in the Insider Today newsletter.</li><li>You can sign up for Business Insider's daily ne… [+7079 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "CNET"
        },
        "author": "Samantha Kelly",
        "title": "PayPal Will Allow Businesses to Buy and Sell Crypto",
        "description": "PayPal will bring bitcoin and other virtual coins to \"millions\" of merchants across the US.",
        "url": "https://www.cnet.com/personal-finance/crypto/paypal-will-allow-businesses-to-buy-and-sell-crypto/",
        "urlToImage": "https://www.cnet.com/a/img/resize/2b2ba45973ffae7baacd4449b399bd35435e4fa0/hub/2022/04/22/d7acb748-e7bd-4553-ae44-2f893ccb87ba/paypal-logo-2022-659.jpg?auto=webp&fit=crop&height=675&width=1200",
        "publishedAt": "2024-09-28T22:00:04Z",
        "content": "PayPal is launching a new service to allow businesses to buy, hold and sell cryptocurrency, making it much easier for US merchants to use crypto for payments.\r\nAlthough the company already allowed it… [+1103 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Genbeta.com"
        },
        "author": "Antonio Vallejo",
        "title": "La identidad del creador de bitcoin es un misterio. HBO tiene un candidato (aunque lo niega): \"por supuesto que no soy Satoshi\"",
        "description": "A pesar de ser la criptodivisa más conocida del mundo, la identidad de su creador (o grupo de creadores) todavía guarda misterio. Hasta ahora conocíamos que Satoshi Nakamoto era el pseudónimo usado por la persona o grupo de personas que crearon el protocolo B…",
        "url": "https://www.genbeta.com/actualidad/identidad-creador-bitcoin-misterio-hbo-tiene-candidato-niega-supuesto-que-no-soy-satoshi",
        "urlToImage": "https://i.blogs.es/c65cdb/bitcoin/840_560.jpeg",
        "publishedAt": "2024-10-09T09:11:59Z",
        "content": "A pesar de ser la criptodivisa más conocida del mundo, la identidad de su creador (o grupo de creadores) todavía guarda misterio. Hasta ahora conocíamos que Satoshi Nakamoto era el pseudónimo usado p… [+3175 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Golem.de"
        },
        "author": "Tobias Költzsch",
        "title": "Bitcoin: Dokumentarfilmer will Satoshi Nakamoto enttarnt haben",
        "description": "Immer noch ist unbekannt, wer sich hinter dem Bitcoin-Erfinder Satoshi Nakamoto verbirgt. Eine neue HBO-Doku soll Licht ins Dunkel bringen. (Bitcoin, Wirtschaft)",
        "url": "https://www.golem.de/sonstiges/zustimmung/auswahl.html?from=https%3A%2F%2Fwww.golem.de%2Fnews%2Fbitcoin-dokumentarfilmer-will-satoshi-nakamoto-enttarnt-haben-2410-189525.html&referer=https%3A%2F%2Ft.co%2F554bc95fff",
        "urlToImage": null,
        "publishedAt": "2024-10-04T12:52:02Z",
        "content": "Besuchen Sie Golem.de wie gewohnt mit Werbung und Tracking,\r\n indem Sie der Nutzung aller Cookies zustimmen.\r\n Details zum Tracking finden Sie im Privacy Center.\r\nSkript wurde nicht geladen. Informat… [+607 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Golem.de"
        },
        "author": "Ingo Pakalski",
        "title": "Bitcoin-Erfinder Nakamoto enttarnt?: Peter Todd dementiert und kritisiert HBO scharf",
        "description": "Eine aktuelle HBO-Doku behauptet, Peter Todd sei der echte Bitcoin-Erfinder. Er dementiert und macht dem Sender schwere Vorwürfe. (Bitcoin, Wirtschaft)",
        "url": "https://www.golem.de/sonstiges/zustimmung/auswahl.html?from=https%3A%2F%2Fwww.golem.de%2Fnews%2Fbitcoin-erfinder-nakamoto-enttarnt-peter-todd-dementiert-und-kritisiert-hbo-scharf-2410-189644.html&referer=https%3A%2F%2Ft.co%2F119e3e0c68",
        "urlToImage": null,
        "publishedAt": "2024-10-09T07:56:02Z",
        "content": "Besuchen Sie Golem.de wie gewohnt mit Werbung und Tracking,\r\n indem Sie der Nutzung aller Cookies zustimmen.\r\n Details zum Tracking finden Sie im Privacy Center.\r\nSkript wurde nicht geladen. Informat… [+607 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "MarketWatch"
        },
        "author": "Frances Yue",
        "title": "Struggling bitcoin miners may be revived by Fed rate decision, regardless of cut size",
        "description": "Whether the Federal Reserve delivers a 25 or 50 basis point rate cut, it could mean a turnaround for bitcoin miners, which have been struggling so far this year, market participants said.",
        "url": "https://www.marketwatch.com/story/struggling-bitcoin-miners-may-be-revived-by-fed-rate-decision-regardless-of-cut-size-db64c987",
        "urlToImage": "https://images.mktw.net/im-63283705/social",
        "publishedAt": "2024-09-17T19:51:00Z",
        "content": "Whether the Federal Reserve delivers an ordinary, or slightly larger interest-rate cut on Wednesday, it could trigger a turnaround for bitcoin miners, which have been struggling with higher borrowing… [+363 chars]"
    },
    {
        "source": {
            "id": "business-insider",
            "name": "Business Insider"
        },
        "author": "fdemott@insider.com (Filip De Mott)",
        "title": "Stock market today: Tech rally leads stocks higher as oil prices plunge and earnings kick off",
        "description": "The market rebounded from Monday's losing session as oil prices plunged 4% and tech stocks gained ground.",
        "url": "https://markets.businessinsider.com/news/stocks/stock-market-today-tech-rally-oil-prices-china-inflation-cpi-2024-10",
        "urlToImage": "https://i.insider.com/67058c9f3f2165d716df5b64?width=1200&format=jpeg",
        "publishedAt": "2024-10-08T20:12:25Z",
        "content": "US stocks rebounded on Tuesday after Monday's losses, with momentum revived by a tech rally and falling crude prices.\r\nThe Magnificent 7 tech cohort led the market higher, with Nvidia at the forefron… [+2393 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Microsiervos.com"
        },
        "author": "alvy@microsiervos.com (Alvy)",
        "title": "Dinero eléctrico: el misterio de Bitcoin",
        "description": "Se estrena en los próximos días en Max el documental de investigación Electric Money: The Mystery of Bitcoin, un trabajo de Cullen Hoback acerca de la figura de Satoshi Nakamoto, creador de Bitcoin.\n\nY digo «creador» aunque como es bien sabido es tal el anoni…",
        "url": "https://www.microsiervos.com/archivo/peliculas-tv/dinero-electrico-misterio-bitcoin.html",
        "urlToImage": "https://img.youtube.com/vi/iSF0KGsFuI8/0.jpg",
        "publishedAt": "2024-10-03T18:38:18Z",
        "content": "Por @Alvy 3 de Octubre de 2024\r\nSe estrena en los próximos días en Max el documental de investigación Electric Money: The Mystery of Bitcoin, un trabajo de Cullen Hoback acerca de la figura de Satosh… [+2064 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Yahoo Entertainment"
        },
        "author": null,
        "title": "Consumer sentiment, Meta's AI growth, bitcoin surge: Catalysts",
        "description": null,
        "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_cdb9db99-cd0e-4d40-9dce-543682efb4d2",
        "urlToImage": null,
        "publishedAt": "2024-09-27T17:52:05Z",
        "content": "If you click 'Accept all', we and our partners, including 240 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "MarketWatch"
        },
        "author": "Frances Yue",
        "title": "Bitcoin could hit a $74,000 record high this month if its October winning streak continues",
        "description": "Bitcoin could reach a new record high above $74,000 this month, fueled by seasonality that favors the cryptocurrency and a bullish macroeconomic setup, according to some analysts.",
        "url": "https://www.marketwatch.com/story/bitcoin-could-hit-a-74-000-record-high-this-month-if-its-october-winning-streak-continues-064f8864",
        "urlToImage": "https://images.mktw.net/im-80920683/social",
        "publishedAt": "2024-10-02T10:00:00Z",
        "content": "Bitcoin could reach a new record high above $74,000 this month, fueled by seasonality that favors the cryptocurrency and a bullish macroeconomic setup, according to some analysts.\r\nOctober is histori… [+378 chars]"
    }
];


const newsContainer = document.getElementById("news-container");

// fetch("https://newsapi.org/v2/everything?q=bitcoin&apiKey=91fc8cf73730404fb5b9c38c67038870")
//     .then((res) => res.json())
//     .then(loadNews);
function showNews(data) {
    data.forEach((news) => {
        const newCard = document.createElement('div');
        newCard.classList.add('card');
        const source = document.createElement('span');
        const image = document.createElement('img');
        const title = document.createElement('h2');
        const author = document.createElement('span');
        const published = document.createElement("p");

        source.classList.add("source");
        source.innerText = news.source.name;

        image.classList.add("image");
        image.src = news.urlToImage || "https://via.placeholder.com/320x200";
        image.alt = news.title;

        title.classList.add("title");
        title.innerText = news.title;

        author.classList.add("author" ,"published");
        author.innerText = `${news.author} . ${news.publishedAt}`;

        published.classList.add('description');
        published.innerText = news.description;

        newCard.append(source,image,title,author,published);
        newsContainer.append(newCard);
        // console.log(news);
    });
}
function loadNews(data) {
    // console.log("Loading News....", data);
    // showNews(data.articles);
    newsContainer.innerHTML='';
    const News=data.filter(news=>news.urlToImage && news.urlToImage!=='[Removed');
    showNews(News);
    // showNews(data);
}
loadNews(news);

const searchInput=document.querySelector(".input-container input");

searchInput.addEventListener('input',()=>{
    const sNews=searchInput.value.toLowerCase();
    const searchNews=news.filter(article=>
        article.urlToImage&& article.urlToImage!=='[Removed]' && (
       article.title.toLowerCase().includes(sNews)||
       article.description.toLowerCase().includes(sNews)||
       article.content.toLowerCase().includes(sNews)||
       article.author.toLowerCase().includes(sNews)
));
    newsContainer.innerHTML='';
    showNews(searchNews);
});

const sortselect=document.querySelector('Sort');
sortselect.addEventListener('change',()=>{
    const sorted=sortselect.value;
    const sortNews=[...news].sort((a,b)=>{
        if(sorted==="publishedAt"){
            return new Date(b.publishedAt)-new Date(a.publishedAt);
        }
        if(sorted==="relevancy"){
            return b.relevanceScore-a.relevanceScore;
        }
        if(sorted==="populairty"){
            return b.popularity-a.popularity;
        }
});
    newsContainer.innerHTML='';
    showNews(sortNews);
});

// function search(articles,term,filter){
//     return articles.filter(articles=>{
//         if(filter==='title')return articles.title.toLowerCase().includes(term);
//         if(filter==='description')return articles.description.toLowerCase().includes(term);
//         if(filter==='content') return articles.content.toLowerCase().includes(term);
//         return article.title.toLowerCase().includes(term)|| article.description.toLowerCase().includes(term);
//     });
// }