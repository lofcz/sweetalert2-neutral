# Sweetalert 2 NEUTRAL

## If you use this library and find it useful, please share the fork existence [upstream](https://github.com/sweetalert2/sweetalert2/issues) by [opening an issue](https://github.com/sweetalert2/sweetalert2/issues/new?assignees=&labels=&template=01_bug_report.md) so other users impacted can migrate.

This drop-in Swal2 replacement removes ~~recent~~ ongoing protestware "features" forcing Limonte's political views upon end-users, breaking automated tests and causing other harm along the way.
  
Original library is now "prohibited" to use in certain countries. This is however stated only in the readme, not in the license you obtain the source with and therefore *probably* isn't legally binding. For users with `navigator.location` matching `ru`, `su`, `by` or `рф` the original library now aggressively replaces the entire page content with Limonte's political messages. 
   
~~[There is now a 10% chance of displaying an unwanted banner & video on your site for visitors based on navigator.language if you are using upstream Swal2.](https://github.com/sweetalert2/sweetalert2/blob/main/src/SweetAlert.js#L235-L279)~~  
  
See: https://security.snyk.io/vuln/SNYK-JS-SWEETALERT2-2774674, https://github.com/sweetalert2/sweetalert2/pull/2462   
Harm done by the original library: https://github.com/sweetalert2/sweetalert2/issues/2568, https://github.com/sweetalert2/sweetalert2/issues/2561, https://github.com/sweetalert2/sweetalert2/issues/2560, https://github.com/sweetalert2/sweetalert2/issues/2552


Install:
```
npm i sweetalert2-neutral
```

If using imports, replace:
```diff
- import Swal from 'sweetalert2';
+ import Swal from 'sweetalert2-neutral';
```

or use [pre-built binaries](https://github.com/lofcz/sweetalert2-neutral/releases).

### FAQ

> I am a Russian citizen, should I merge to Swal2-NEUTRAL?

Most certainly. Currently you could (in theory) end up in prison up for 20 years. See [the law](http://www.consultant.ru/document/cons_doc_LAW_10699/4618fd95c30a6fbe7717ceaebf64f082e735c9ad/).  
[Limonte acknowledged this with sarcasm about npm ecosystem security.](https://github.com/sweetalert2/sweetalert2/pull/2462#issuecomment-1184357588)

> I am a non-Russian citizen, should I merge to Swal2-NEUTRAL?

Most certainly. By merging you will mitigate ~~the 10% chance of unwanted HTML being injected to your site.~~ your entire page content being overwriten. See [this issue](https://github.com/sweetalert2/sweetalert2/issues/2466) or [this one](https://github.com/sweetalert2/sweetalert2/issues/2474) for the confusion this can create.

> I want to have anti-war messages displayed on my site, should I merge to Swal2-NEUTRAL?

Most certainly. By merging you can decide which anti-war messages you want to display, instead of relying on [volatile & abruptly changing](https://github.com/sweetalert2/sweetalert2/commit/fc75aafc9b723740122e4afc880eefeec7155d24) implementation by Limonte.

> Are there any other changes apart from removing "anti-war" messages?

No.

> Are there any other benefits apart from unwanted banners not showing up on my site?

Yes, the library is ~5% smaller, thus less traffic is used and your site loads faster.

> How do I migrate to Swal2-NEUTRAL?

- When Swal2 is installed via npm: `npm uninstall sweetalert2` `npm i sweetalert2-neutral`
- When serving Swal2 via local files: [replace Swal2 JS & CSS pre-built files](https://github.com/lofcz/sweetalert2-neutral/releases)

### Aftermath

The original fork annoucement accumulated over 20 positive reactions, originally even Limonte reacted with "thumbs up". A few days later he changed his mind and resorted to censorship, deleting the annoucement:

![image](https://user-images.githubusercontent.com/10260230/180612664-87a2b27b-7509-4b92-8caa-0e62a6d78f53.png)
