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
    int n,m;
    cin>>n>>m;
    string s;
    cin>>s;
    int a[m];
    for(int i=0;i<m;i++)
    {
        cin>>a[i];
    }
    string c;
    cin>>c;
    sort(all(c));
    sort(a,a+m);
    vector<int> v;
    for(int i=0;i<m-1;i++)
    {
        if(a[i]==a[i+1])
        {
            continue;
        }
        else
        {
            v.push_back(a[i]);
        }
    }
    v.push_back(a[m-1]);
    for(int i=0;i<v.size();i++)
    {
        s[v[i]-1]=c[i];
    }
    cout<<s<<endl;

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