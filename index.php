<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<title>Diego Téliz</title>
		<meta name="description" content="Official Diego Téliz website" />
		<meta name="author" content="Diego Teliz" />
		<meta name="viewport" content="width=device-width; initial-scale=1.0" />
		
		<!-- Styles & Fonts-->
		<link rel="stylesheet" type="text/css" href="/css/style.css" />
		<link href='http://fonts.googleapis.com/css?family=Roboto+Condensed|Roboto|Open+Sans:400,300,600' rel='stylesheet' type='text/css'>

		<!-- Icons -->
		<link rel="icon" type="image/x-icon" href="/img/favicon.ico" sizes="16x16" />
		
		<!-- Scripts -->
		<script data-main="/js/main" src="/js/lib/require.js"></script>

		<!-- Fixes -->
		<!--[if lt IE 9]>
			<script type="text/javascript" src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
			<script type="text/javascript" src="http://css3-mediaqueries-js.googlecode.com/svn/trunk/css3-mediaqueries.js"></script>
		<![endif]-->

		<!-- Google Analytics -->
		<script type="text/javascript">
			(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
			(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
			m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
			})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

			ga('create', 'UA-36939365-1', 'diegoteliz.com');
			ga('send', 'pageview');
		</script>
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
			</nav>
			<figure id="logo">
				<a href="/">
					<img src="/img/diegoteliz-logo.png" alt="DT" />
				</a>
			</figure>
		</header>
		<div id="overlay"></div>
		<div id="preloader"></div>
		<div id="dinamic-content">
			<!-- Here will be loaded HTML asynchronously -->
		</div>
	</body>
</html>