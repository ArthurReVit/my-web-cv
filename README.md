v0.4.0-alpha

- Added new Header Button component.
- Content now displays content through app state depending on the user's choice on what they wnat to see. Current sections:

  - Overview
  - Education and Job

- Footer was temporarily taken down of the Body component because I don't have any data to fill within.

- Next update will fix an error in the page scaling that appeared when the Overview and Education/Job components were called through the app state.
- Next update wiff improve CSS code and delete some duplicated/non desired parts of the code. At the same time, upgrades to the design system will be applied.

After the mentioned changes are applied, the project will begin it's beta phase, testing and mayor debugging/optimization will be applied and new functionallity will be added like:

- Translation and language toggle.
- Services section.
- Backend to add ddata in a more dynamic way.
- Contact section.
- Download CV in PDF format.
- Fill the info with sample data for any user who wants to use the template.

v0.3.0-alpha

- Created Skills, Brief and Resume components already displaying the required info. The full list of components is:

  Location: src/components/body

  - Overview
  - PersonalBrief
  - Resume
  - Skills

- The new common components created to fill the previous mentioned ones are:

  Location: src/components/common

  - Badges (new badge added)
  - Buttons

- Finally, the aboutMe module holding the data feeding the overview section was created. It can be found under src/info

v0.2.0-alpha

- Created education and job components, already displaying the required info. The full list of components is:

  Location: src/components/body

  - Education And Job
  - Education
  - Job

- Aditionally, the components holding the basic structure of the website can be found in the same location (src/components/body)

  - Header
  - Content
  - Footer

- Created 3 modules with objects holding raw data to feed the skills, education and job sections:

  Location: src/info

  - education
  - job
  - skills

- Created the following common components:

  Location: src/components/common

  - Field Badge
  - Info Card
  - Badge Divider
  - Box Divider
  - Page Heading
  - Section Heading
  - Text Box
  - Bullet Text Box

- Due to an error, the code used in the education and job sections, was written into Overview modules generated in "src/components/body". This will be fixed in the next commit.

v0.1.0-alpha

- React app created.
