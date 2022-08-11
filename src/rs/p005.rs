#[cfg(test)]
fn p005(num: i32) -> i32 {
    (1..num)
        .filter(|x| (x % 3 == 0 || x % 5 == 0))
        .fold(0, |acc, x| acc + x)
}

#[test]
fn t005() {
    assert_eq!(p005(10), 23);
    assert_eq!(p005(1000), 233168);
}
