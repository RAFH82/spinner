const sentance = "|/-\\|/-\\|";
let time = 0;
let delay = 50;

for (let char of sentance) {
  setTimeout(() => {
    process.stdout.write("\r");
    process.stdout.write(char);
    }, time);
  time += delay;
};

