#include <iostream>

using namespace std;

bool isUnique(std::string str) {
   long tbl = 0;
   for (char ch:str) {
    long mask = 1 << ( (int)ch - 97 );
    if (tbl & mask) {
       return false;
    } else {
       tbl = tbl | mask;
    }
   }

   return true;
}

int main() {
    std::string str;
    std::cin >> str;
     
    if (isUnique(str)) {
        std::cout << "string contains with unique charakters";     
    } else {
        std::cout << "string does not a unique";
    }
    return 0;
}

