#[cfg(test)]
fn p004() -> u64 {
    let mut a: u64;
    let mut b: u64;
    let mut skip: u64;

    let mut palindrome = 0;

    a = 999;

    while 100 <= a {
        if a % 11 == 0 {
            b = 999;
            skip = 1;
        } else {
            b = 990;
            skip = 11;
        }

        while a <= b {
            let c: u64 = a * b;

            if c <= palindrome {
                break;
            } else if crate::rs::lib::is::palindrome(&c.to_string()) {
                palindrome = c;
            }

            b = b - skip;
        }

        a = a - 1;
    }

    palindrome
}

#[test]
fn t004() {
    assert_eq!(p004(), 906609)
}
