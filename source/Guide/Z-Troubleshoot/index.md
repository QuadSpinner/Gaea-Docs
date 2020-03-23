---
uid: troubleshooting
title: Troubleshooting
---

## Watson Diagnostics Tool

Gaea ships with **Watson.exe**, an advanced diagnostics tool that examines your Gaea installation as well as your general hardware configuration, and allows you to log issues with our Technical Support department without opening a web browser.

Watson's goal is to identify and collect small bits of information that may not be readily apparent to the user, or may not be visible without a bit of digging. For example, a small setting in the Preferences may be causing an issue. Watson can identify patterns based on the existing application logs and certain settings, or collect crash logs from recent incidents.

These logs help us understand your Gaea installation, your hardware and relevant drivers, and other similar information. This reduces the need for us to ask you questions and get you solutions to problems at a much quicker pace.

<figure>
<img src="/images/ui/Watson1.png" />
<figcaption>
Before starting, you can enable additional optional diagnostic tests.
</figcaption>
</figure>

### Starting Watson

When you start Watson, available through the Start Menu in the QuadSpinner Gaea program group, you can choose to run optional tests. In most situations, these additional tests are not necessary and can be safely skipped unless instructed by a support technician.


<figure>
<img src="/images/ui/Watson2.png" />
<figcaption>
It usually takes between a few seconds to a couple of minutes to run the tests.
</figcaption>
</figure>

### The Diagnostics Process

The diagnostics collection process is fairly quick. Watson will collect the data in plain, human readable formats. If enabled in the previous step, the optional diagnostics will include a detailed scan of the Windows Event Log for any additional data on Gaea and Archon crashes.


Before running tests, a benchmark build is run using all nodes available in Gaea. This helps diagnose issues in specific nodes. This test can be somewhat slow as 90+ nodes will be built at 1024 resolution.

<figure>
<img src="/images/ui/Watson3.png" />
<figcaption>
Once the diagnostics are collected, you can enter comments and steps to recreate the issue.
</figcaption>
</figure>

### Comments and Attachments

Before submitting the ticket, you can enter any comments you might have or explain how to recreate an issue you might be facing. Please be as detailed as possible. You can also attach a .TOR/.TORX file if you would like us to examine it.

{.WARNING} 
> Please make sure you enter your email address and details on the nature of the problem, and if possible, steps to recreate the situation. While the logs tell us what might have gone wrong, it is impossible to diagnose the issue without some context. Blank tickets will be automatically flagged and disposed by our prioritization system.

If you wish to examine the contents of the report, or even modify the zip file that is submitted, you can choose to create just the zip file and not file it automatically. The file will then be saved to your desktop, which you can then examine and alter if you wish to remove any specific data. While this is not recommended, we respect your right to privacy and give you the full freedom to control what data is sent to our technical support team.

<figure>
<img src="/images/ui/Watson4.png" />
<figcaption>
After submitting the issue, you will be assigned a ticket number.
</figcaption>
</figure>

Support tickets, especially those involving issues with the software, can often be expedited when a Watson log is attached.

 
### Your privacy

Any support logs submitted are usually discarded within 4-6 weeks of closing the ticket. We may retain some of the logs for a longer period in certain situations. For example, if the issue relates to an on-going bug hunt or development task.

If you submit a .TOR file, we hold it in utmost confidence and discard it along with the log as outlined above. If we retain the logs, we will still permanently delete the .TOR files.