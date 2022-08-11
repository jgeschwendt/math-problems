#[cfg(test)]
fn p003(limit: u64) -> u64 {
    use std::ops::Div;

    let mut n = limit;
    let mut factor_last = 1;

    if n % 2 == 0 {
        n = n.div(2 as u64);
        factor_last = 2;

        while n % 2 == 0 {
            n = n.div(2);
        }
    }

    let mut factor = 3;
    let mut factor_max = (n as f64).sqrt() as u64;

    while n > 1 && factor <= factor_max {
        if n % factor == 0 {
            n = n / factor;
            factor_last = factor;

            while n % factor == 0 {
                n = n / factor;
            }

            factor_max = (n as f64).sqrt() as u64;
        }

        factor = factor + 2;
    }

    if n == 1 {
        factor_last
    } else {
        n
    }
}

#[test]
fn t003() {
    assert_eq!(p003(600851475143), 6857)
}
