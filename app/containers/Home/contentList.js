/**
 * Created by User on 6/1/2017.
 */
const secondatyText = `Lorem Ipsum is simply dummy text of the
 printing and typesetting industry. Lorem Ipsum has been the
  industry\'s standard dummy text ever since the 1500s
  Lorem Ipsum is simply dummy text of the
 printing and typesetting industry. Lorem Ipsum has been the
  industry\'s standard dummy text ever since the 1500s`;

const list = [
  {
    label: 'Colors',
    isExpanded: false,
    items: [
      {
        label: 'Alternate color space not DeviceCMYK, DeviceGray or Lab',
        secondaryText: secondatyText,
        isHovered: false
      },
      {
        label: 'Black line (100% Gray) is less than  2pt wide',
        secondaryText: secondatyText,
        isHovered: false
      },
      {
        label: `Black line (DeviceCMYK) is less than  2pt wide and set to
         overprint but OPM is off`,
        secondaryText: secondatyText,
        isHovered: false
      }
    ]
  },
  {
    label: 'Document',
    isExpanded: true,
    items: [
      {
        label: 'Alternate color space not DeviceCMYK, DeviceGray or Lab',
        secondaryText: secondatyText,
        isHovered: false
      },
      {
        label: 'Black line (100% Gray) is less than  2pt wide',
        secondaryText: secondatyText,
        isHovered: false
      },
      {
        label: `Black line (DeviceCMYK) is less than  2pt 
        wide and set to overprint but OPM is off`,
        secondaryText: secondatyText,
        isHovered: false

      }
    ]
  },
  {
    label: 'Font',
    isExpanded: false,
    items: [
      {
        label: 'Alternate color space not DeviceCMYK, DeviceGray or Lab',
        secondaryText: secondatyText,
        isHovered: false
      },
      {
        label: 'Black line (100% Gray) is less than  2pt wide',
        secondaryText: secondatyText,
        isHovered: false
      },
      {
        label: `Black line (DeviceCMYK) is less than  
        2pt wide and set to overprint but OPM is off`,
        secondaryText: secondatyText,
        isHovered: false

      }
    ]
  },
  {
    label: 'General Graphic state properties',
    isExpanded: false
  },
  {
    label: 'Graphic state properties for fill',
    isExpanded: false
  },
  {
    label: 'ICC color spaces',
    isExpanded: false
  },
  {
    label: 'Image',
    isExpanded: false
  },
  {
    label: 'Output Intents for PDF/X',
    isExpanded: false
  },
  {
    label: 'Page description',
    isExpanded: false
  },
  {
    label: 'Pages',
    isExpanded: false
  },
  {
    label: 'Text',
    isExpanded: false
  }

];
export default list;
