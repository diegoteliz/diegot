<?php require_once 'include/functions.php'; ?>

<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<title>Diego Teliz</title>
		<meta name="description" content="Hi! I'm Diego Teliz, a <?php echo get_years_old( '1991-03-24' ) ?> years old Web Developer and Designer from Montevideo, Uruguay." />
		<meta name="author" content="Diego Teliz" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<!--

		                    ░▓██      
		                    ████      
		                    ████      
		              ▒███░ ████      
		              ████░ ████      
		              ████  ████      
		              ████░ ████      
		       ▒▓▓▓█▒ ████  ████ ░▓▓▓▓
		   ░▓███████▓ ████░ ████ ▓████
		  ▓████▒░     ████  ████      
		 ▓███▓        ████░ ████      
		▓████         ████░ ████      
		████▓         ████░ ████      
		▓████         ████  ████▒     
		 ▓███▓       ████▓  ░████▒    
		  ▓████▓▒░▒▓████▓    ░█████▓▒▒
		    ▒▓███████▓▒        ░▓█████



		Diego Teliz © 2014 - All Rights Reserved
		https://diegoteliz.com

		Code and Design by Diego Teliz - aloha@diegoteliz.com (@DiegoTeliz)

		-->

		<!-- Global site tag (gtag.js) - Google Analytics -->
		<script async src="https://www.googletagmanager.com/gtag/js?id=UA-36939365-1"></script>
		<script>
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());
		gtag('config', 'UA-36939365-1');
		</script>

		
		<!-- Styles & Fonts-->
		<link rel="stylesheet" type="text/css" href="/css/style.css?ver=1.1" />
		<link href='https://fonts.googleapis.com/css?family=Roboto+Condensed%7CRoboto%7COpen+Sans:400,300,600' rel='stylesheet' type='text/css'>

		<!-- Icons -->
		<link rel="apple-touch-icon" sizes="57x57" href="/img/favicon/apple-touch-icon-57x57.png">
		<link rel="apple-touch-icon" sizes="114x114" href="/img/favicon/apple-touch-icon-114x114.png">
		<link rel="apple-touch-icon" sizes="72x72" href="/img/favicon/apple-touch-icon-72x72.png">
		<link rel="apple-touch-icon" sizes="144x144" href="/img/favicon/apple-touch-icon-144x144.png">
		<link rel="apple-touch-icon" sizes="60x60" href="/img/favicon/apple-touch-icon-60x60.png">
		<link rel="apple-touch-icon" sizes="120x120" href="/img/favicon/apple-touch-icon-120x120.png">
		<link rel="apple-touch-icon" sizes="76x76" href="/img/favicon/apple-touch-icon-76x76.png">
		<link rel="apple-touch-icon" sizes="152x152" href="/img/favicon/apple-touch-icon-152x152.png">
		<link rel="icon" type="image/png" href="/img/favicon/favicon-196x196.png" sizes="196x196">
		<link rel="icon" type="image/png" href="/img/favicon/favicon-160x160.png" sizes="160x160">
		<link rel="icon" type="image/png" href="/img/favicon/favicon-96x96.png" sizes="96x96">
		<link rel="icon" type="image/png" href="/img/favicon/favicon-16x16.png" sizes="16x16">
		<link rel="icon" type="image/png" href="/img/favicon/favicon-32x32.png" sizes="32x32">
		<meta name="msapplication-TileColor" content="#00a9a4">
		<meta name="msapplication-TileImage" content="/img/favicon/mstile-144x144.png">

		<!-- Status bar -->
		<meta name="theme-color" content="#006F6B">
		<meta name="msapplication-navbutton-color" content="#006F6B">
		<meta name="apple-mobile-web-app-status-bar-style" content="#006F6B">
	</head>
	<body>
		<header id="main-menu">
			<nav id="main-nav-wrapper">
				<a href="#" id="menu-btn" class="static"><span>Menu</span></a>
				<ul id="main-nav">
					<li class="main-nav-item"><a href="/work">Work</a></li>
					<li class="main-nav-item"><a href="/about">About</a></li>
					<li class="main-nav-item"><a href="/contact">Contact</a></li>
				</ul>
				<a href="#" id="options-btn" class="static"><span>Social links</span></a>
				<div id="options-wrapper">
					<ul id="options">
						<li><a href="https://www.linkedin.com/in/diegoteliz" class="static icon-linkedin both-views" rel="nofollow" target="_blank">/diegoteliz</a></li>
						<li><a href="https://twitter.com/diegoteliz" class="static icon-twitter both-views" rel="nofollow" target="_blank">@DiegoTeliz</a></li>
						<li><a href="https://www.facebook.com/diegoteliz" class="static icon-facebook both-views" rel="nofollow" target="_blank">/diegoteliz</a></li>
						<li><a href="https://plus.google.com/+DiegoTeliz/" class="static icon-google" rel="nofollow" target="_blank">+DiegoTeliz</a></li>
						<li><a href="https://github.com/diegoteliz/" class="static icon-github" rel="nofollow" target="_blank">/diegoteliz</a></li>
					</ul>
				</div>
			</nav>
			<figure id="logo">
				<a href="/">
					<img src="/img/diegoteliz-logo.svg" alt="DT" />
				</a>
			</figure>
		</header>
		<div id="preloader"></div>
		<div id="dinamic-content">
			<!-- Here will be loaded HTML asynchronously -->
		</div>

		<!-- Scripts -->
		<script data-main="/js/main" src="/js/lib/require.js"></script>

		<!-- Fixes -->
		<!--[if lt IE 9]>
			<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js"></script>
			<script type="text/javascript" src="https://css3-mediaqueries-js.googlecode.com/svn/trunk/css3-mediaqueries.js"></script>
		<![endif]-->
	</body>
</html>
