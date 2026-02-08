fn main() {
   let now = chrono::Local::now();
   println!("Hello ASL!");
   println!("Current Date: {}", now.format("%Y-%m-%d %H:%M:%S"));
}