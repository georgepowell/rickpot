jQuery("a").each(function() { // For every link...
	if (Math.random() < 0.01) { // 1% chance
	  $(this).prop('href', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'); // set the href property to "Rick Astley - Never Gonna Give You Up" on Youtube
    }
});