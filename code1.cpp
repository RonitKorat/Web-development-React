#include<bits/stdc++.h>
#define erase(a) a.erase(unique(a.begin(),a.end()),a.end())
#define pb push_back
#define ll long long
#define int long long int
#define all(v) v.begin(),v.end()
#define yes cout << "YES" << endl
#define no cout << "NO" << endl
#define lbv lower_bound(v.begin(),v.end(),x)-v.begin()
#define upv upper_bound(v.begin(),v.end(),x)-v.begin()
#define lba lower_bound(a,a+n,x)-a
#define upa upper_bound(a,a+n,x)-a
using namespace std;
void solve()
{
    int n;
    cin>>n;
    int a[n];
    map<int,int> m;
    for(int i=0;i<n;i++)
    {
      cin>>a[i];
      m[a[i]]++;
    }
    vector<int> dp(1e5+1,0);
    dp[1]=m[1];
    for(int i=2;i<=1e5;i++)
    {
        dp[i]=max(dp[i-2]+i*m[i],dp[i-1]);
    }
    cout<<dp[1e5]<<endl;
}
signed main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);
    int t;
    t = 1;
    // cin >> t;
    while (t--)
    {
        solve();
    }
}