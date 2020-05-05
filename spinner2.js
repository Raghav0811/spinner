var cursor = "|/-\\|/-\\|/-\\|/-\\|/-\\|/-\\|/-\\|/-\\|";
var timeDelay = 100;
  for(const char of cursor) {
    timeDelay += 200;
    setTimeout(() => {
      process.stdout.write('\r' + char + " ");
    }, timeDelay);
  }
