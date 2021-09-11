---
uid: watson
title: Troubleshooting with Watson
---

## Watson Diagnostics Tool

Gaea ships with **Watson.exe**, an advanced diagnostics tool that
examines your Gaea installation and your general hardware
configuration, and allows you to create a diagnostics package that you
can submit to our Technical Support for assistance.

Watson's goal is to identify and collect small bits of information that
may not be readily apparent to the user, or may not be visible without a
bit of digging. For example, a small setting in the @preferences may be
causing an issue. Watson can identify patterns based on the existing
application logs and certain settings, or collect crash logs from recent
incidents.

These logs help us understand your Gaea installation, your hardware and
relevant drivers, and other pertinent information. This reduces the questions we need
to ask you and helps us resolve the issues at a much quicker pace.

#### Starting Watson

![](/images/ui/Watson1.webp){.ui .image .large}

When you start Watson, available through the Start Menu in the
QuadSpinner Gaea program group, you can choose to run optional tests. In
most situations, these additional tests are not necessary and can be
safely skipped unless instructed by a support technician.


#### The Diagnostics Process

![](/images/ui/Watson2.webp){.ui .image .large}

The diagnostics collection process is fairly quick. Watson will collect
the data in plain, human-readable formats. If enabled in the previous
step, the optional diagnostics will include a detailed scan of the
Windows Event Log for any additional data on Gaea and Archon crashes.

Before running tests, a benchmark build is run using all nodes available
in Gaea. This helps diagnose issues in specific nodes. This test can be
somewhat slow as 90+ nodes will be built at 1024 resolution.


#### Submitting the Ticket

![](/images/ui/Watson3.webp){.ui .image .large}

Once the diagnostics package has been compiled, you can
[open a new ticket](https://quadspinner.com/Support/) and attach the
package.


#### Your privacy

Any support logs submitted are usually discarded within 4-6 weeks of
closing the ticket. We may retain some of the logs for a longer period
in certain situations. For example, if the issue relates to an ongoing
bug hunt or development task.

If you submit a .TOR file, we hold it in utmost confidence and discard
it along with the log as outlined above. If we retain the logs, we will
still permanently delete the .TOR files.
