# Mykonote [/ˈmɪkəˌnəʊt/] - mobile app

*You can register for a free account at
[mykonote.com](https://app.mykonote.com/#/register) or within the Android
[mobile app](https://github.com/panter/mykonote-app), which is available on
[Google Play](https://play.google.com/store/apps/details?id=com.mykonote).*
<br>
*The free account is limited to 100 notes.*

<a
  href='https://play.google.com/store/apps/details?id=com.mykonote&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
  <img
    alt='Get it on Google Play'
    src='https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png'
    height="60px" />
</a>

---

![list view](screenshot1.png)
![edit view](screenshot2.png)

The note taking app that doesn't suck. Made under the Mykonian sun.

The goal of this project is to provide a solid note taking app with just the
core functionality. There won't be any fancy unnecessary features such as a
chat. It basically meets the one requirement: Taking and managing private
notes.

What Mykonote offers:

* A [solid richtext editor](http://quilljs.com/) which works properly without
  ruining the formatting
* [Task lists](https://github.com/koffeinfrei/quill-task-list) (aka. todo
  lists)
* Pseudo offline support, so you don't lose data when the connection is bad or even
  missing. The next time the internet is up again your edits will be synced to
  the server.
* A simple and fast user experience
* An always available and easy to use search
* A donkey logo
* [Free and open source software](https://www.gnu.org/philosophy/free-sw.html).
  There is no [vendor lock-in](https://en.wikipedia.org/wiki/Vendor_lock-in)
  and there will never be any weird business going on with your data.


Also see [the main Mykonote web application](https://github.com/panter/mykonote) for more info.

## Development setup

To get the application started the following steps are required.

* [Install Cordova](https://cordova.apache.org/docs/en/latest/guide/cli/index.html)
* `cp .env.example .env` and fill in some values
* `cp build.json.example build.json` and fill in some values

The main JavaScript and CSS files are from [the main Mykonote web
application](https://github.com/panter/mykonote).  To update them invoke `rake
mobile:copy` within [the main Mykonote web
application](https://github.com/panter/mykonote).

### Build scripts

Theare are 2 scripts `bin/production-variant` and `bin/test-variant` that help
building the application and deploying to an emulator or a device.

## Links

- [Homepage www.mykonote.com](https://www.mykonote.com)
- [Web app at app.mykonote.com](https://app.mykonote.com)
- [Mobile app on Google
  Play](https://play.google.com/store/apps/details?id=com.mykonote)
- [Main web application source code](https://github.com/panter/mykonote-app)


## License

    Copyright 2016 Panter AG <info@panter.ch>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as
    published by the Free Software Foundation, either version 3 of the
    License, or (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program. If not, see <http://www.gnu.org/licenses/>.
