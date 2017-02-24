# Hexperience Tools
Advanced helper tools for Hacker Experience Legacy.
## Features
* Auto hide-me automatically removes log entries containing the local IP and saves the log.
* Automatically switch to internet log after successful upload, download, install, hidden, seeked, and virus removal.
  * Useful for triggering auto hide-me to quickly hide activity.
* IP scraper automatically collects IP addresses from logs and stores them in the IP Database.
  * Database is sorted by local, internet, saved, and ignore.
  * Ignoring an IP causes the ip-scraper to ignore that IP in the future.
  * Saving an IP works like ignore but is saved in a separate list for easier access. Useful for storing IP's for hacking later.
  * Using brute immediately attempts to brute-force hack the IP.
  * Wipe button for clearing each database in one click.
* Add's Clear buttons to log boxes to clear the entire log in one click.
* Add's favorites capability to Hacked Database for marking favorite servers.
* Log monitoring system.
  * Refreshes log page automatically and scrapes logs.
  * Can be separately enabled on local & internet logs.
  * Results are displayed in the current log window when monitor is stopped.
  * Automatically removes bitcoin, mailer, account logins, and fund transfer/collection lines in local logs then saves.
  * Ignores localhost lines in local logs to focus on the foreign logins.
* Add's login link to Hacked Database list to directly log into respective IP's.
