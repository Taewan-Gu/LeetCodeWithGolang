function toGoatLatin(sentence: string): string {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    let endWord = "maa"
    let ans = ""
    for (const word of sentence.split(" ")) {
        if (vowels.includes(word[0])) {
            ans += word + endWord + " "
        } else {
            ans += word.slice(1) + word[0] + endWord + " "
        }
        endWord += "a"
    }

    return ans.slice(0, ans.length-1)
};
