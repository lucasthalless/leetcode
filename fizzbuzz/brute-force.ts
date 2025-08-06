function fizzBuzz(n: number): string[] {
    const answer: string[] = [];
    for(let i = 1; i <= n; i++) {
        let index = i.toString();
        if ((i % 3) == 0) index = "Fizz";
        if ((i % 5) == 0) index = "Buzz";
        if ((i % 15) == 0) index = "FizzBuzz";
        answer.push(`${index}`)
    }

    return answer;
};
