#include <bits/stdc++.h>
#define erase(a) a.erase(unique(a.begin(), a.end()), a.end())
#define pb push_back
#define ll long long
#define int long long int
#define all(v) v.begin(), v.end()
#define yes cout << "YES" << endl
#define no cout << "NO" << endl
#define lbv lower_bound(v.begin(), v.end(), x) - v.begin()
#define upv upper_bound(v.begin(), v.end(), x) - v.begin()
#define lba lower_bound(a, a + n, x) - a
#define upa upper_bound(a, a + n, x) - a
using namespace std;
void solve()
{
    int n, k;
    cin >> n >> k;
    int a[k];
    for (int i = 0; i < k; i++)
    {
        cin >> a[i];
    }
    sort(a, a + k);
    int ans = 0;
    for (int i = 0; i < k-1; i++)
    {
        if (a[k - 1] == n)
        {
            break;
        }
        if (a[i] == 1)
        {
            ans++;
        }
        else
        {
            ans += (a[i]) * 2 - 1;
        }
    }
    cout << ans << endl;
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