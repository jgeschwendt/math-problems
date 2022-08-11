pub fn palindrome(str: &str) -> bool {
    let forward = str.chars();
    let reverse = forward.clone().rev();

    forward.collect::<String>() == reverse.collect::<String>()
}
