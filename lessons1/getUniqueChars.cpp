#include <iostream>
#include <map>
#include <vector>

using namespace std;

vector<int> isUnique() {
  map<int, bool> m;
   
  int arr[5] = {1, 2, 3, 1, 2};

  for (int ch:arr) {
     m.emplace(ch, true);
  }

  int i = 0;
  std::vector<int> vect;

  for ( const auto &myPair : m ) {
    cout << "size is a " << std::endl;
    cout << myPair.first << endl;

    vect.insert(vect.begin() + i, myPair.first);
    ++i;
  }

   return vect;
}



int main(void) {
  vector<int> v = isUnique();
   
  cout << "contains the following size: ";
  std::cout << v.size() << endl;
  
  
  cout << "vector elements is a: ";
   for (auto it = v.begin(); it != v.end(); ++it) {
      cout << *it << " "; 
   }

   return 0;
}
