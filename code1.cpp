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
    int n,m,k;
    cin>>n>>m>>k;
    string a;
    int c=0,d=0,ind=m-1;
    cin>>a;
    for(int i=0;i<n;i++)
    {
        if(a[i]=='L')
        {
           ind=m;
        }
        else if(a[i]=='W' && ind<=0)
        {
            c++;
        }
        else if(a[i]=='C' && ind<=0)
        {
            no;
            return;
        }
        ind--;
        if(c>k)
        {
            no;
            return;
        }
    }
    yes;

}
signed main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);
    int t;
    t = 1;
    cin >> t;
    while (t--)
    {
        solve();
    }
}