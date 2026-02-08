#include <iostream>
#include <ctime>
int main() {
   std::time_t now = std::time(0);
   std::cout << "Hello ASL!" << std::endl;
   std::cout << "Current Date: " << std::ctime(&now);
   return 0;
}