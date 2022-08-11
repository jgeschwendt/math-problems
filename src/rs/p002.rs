#[cfg(test)]
fn p002(num: u32) -> u32 {
    crate::rs::lib::fibonacci::new()
        .take_while(|x| x <= &num)
        .filter(|n| n % 2 == 0)
        .sum()
}

#[test]
fn t002() {
    assert_eq!(p002(4000000), 4613732)
}
