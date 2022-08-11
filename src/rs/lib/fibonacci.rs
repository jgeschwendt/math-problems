pub struct Fibonacci {
    pub current: u32,
    pub next: u32,
}

impl Iterator for Fibonacci {
    type Item = u32;

    fn next(&mut self) -> Option<Self::Item> {
        let next = self.current + self.next;

        self.current = self.next;

        self.next = next;

        Some(self.current)
    }
}

pub fn new() -> Fibonacci {
    Fibonacci {
        current: 0,
        next: 1,
    }
}
