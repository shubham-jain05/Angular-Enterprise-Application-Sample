import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export abstract class ModuleAccessTypes {
  public static CREATE: string = "Create";
  public static READ: string = "Read";
  public static UPDATE: string = "Update";
  public static DELETE: string = "Delete";
  public static ALL: string = "All";
}

export class SystemModule {
  name: string;

  create: string;
  read: string;
  update: string;
  delete: string;
  all: string;

  constructor(moduleName: string) {
    this.name = moduleName;

    this.create = `${ModuleAccessTypes.CREATE}${this.name}`;
    this.read = `${ModuleAccessTypes.READ}${this.name}`;
    this.update = `${ModuleAccessTypes.UPDATE}${this.name}`;
    this.delete = `${ModuleAccessTypes.DELETE}${this.name}`;
    this.all = `${ModuleAccessTypes.ALL}${this.name}`;
  }
}

@Injectable()
export class SystemModulesList {
  // Leavel permession
  public DASHBOARD: SystemModule = new SystemModule("Dashboard");

  //
  public CUSTOM_DASHBOARD: SystemModule = new SystemModule("Custom Dashboard");

  // Leavel permession
  public BOOKING_TOOL: SystemModule = new SystemModule("Booking Tool");

  // Leavel permession
  public USER_MANAGEMENT: SystemModule = new SystemModule("Users Management");
  // Sublevel permission
  public ADMIN_ROLE: SystemModule = new SystemModule("Admin Roles");
  public ADMIN_USERS: SystemModule = new SystemModule("Admin Users");
  public ADMIN_CUSTOMER_MANAGEMENT: SystemModule = new SystemModule(
    "Customer Management"
  );

  // Leavel permession
  public MESSAGE_BOARD: SystemModule = new SystemModule("Message Board");

  // Leavel permession
  public TRAVEL_ERP: SystemModule = new SystemModule("Travel ERP");
  // Sublevel permission
  public COUPON: SystemModule = new SystemModule("Coupon");
  public WALLET_CREDIT: SystemModule = new SystemModule("Wallet Credit");
  public MARKUP_MARKDOWN: SystemModule = new SystemModule("MarkUp/MarkDown");
  public FEE: SystemModule = new SystemModule("Fee");
  public LOYALTY_MANAGEMENT: SystemModule = new SystemModule(
    "Loyalty Management"
  );
  // sublevel 2 permission
  public EARN_RULE: SystemModule = new SystemModule("Earn Rule");
  public BURN_RULE: SystemModule = new SystemModule("Burn Rule");
  public EXPIRY_RULE: SystemModule = new SystemModule("Expiry Rule");

  // Leavel permession
  public CAMPAIGN_MANAGEMENT: SystemModule = new SystemModule(
    "Campaign Management"
  );

  // Leavel permession
  public COMUNICATION_MANAGEMENT: SystemModule = new SystemModule(
    "Comunication Management"
  );
  // Sublevel permission
  public NOTIFICATION_MANAGEMENT: SystemModule = new SystemModule(
    "Notification Management"
  );
  public COMMUNACATION_TRIGGERS: SystemModule = new SystemModule(
    "Communication Triggers"
  );
  public USER_SEGMENTATION: SystemModule = new SystemModule(
    "User Segmentation"
  );
  public EMAIL_MANAGEMENT: SystemModule = new SystemModule("Email Management");
  // sublevel 2 pemission
  public EMAIL_TEMPLATES: SystemModule = new SystemModule("Email Templates");
  public GLOABEL_EMAIL_SETTINGS: SystemModule = new SystemModule(
    "Global Email Settings"
  );
  public EMAIL_COMPONENT_MANAGEMENT: SystemModule = new SystemModule(
    "Email Component Settings"
  );

  public INVENTORY_MANAGEMENT: SystemModule = new SystemModule(
    "Inventory Management"
  );
  // Sublevel permission
  public PRODUCT: SystemModule = new SystemModule("Product");
  public VOUCHER_MANAGEMENT: SystemModule = new SystemModule(
    "Voucher Management"
  );
  public OFFLINE_HOTEL_INVENTORY: SystemModule = new SystemModule(
    "Offline Hotel Inventory"
  );

  // Leavel permession
  public CONTENT_MANAGEMENT: SystemModule = new SystemModule(
    "Content Management"
  );
  // Sublevel permission
  public AIRPORT_MANAGEMENT: SystemModule = new SystemModule(
    "Airport Management"
  );
  public HOTEL_DROPDOWN_CONTENT: SystemModule = new SystemModule(
    "Hotel Dropdown Content"
  );
  public AIRLINE_MANAGEMENT: SystemModule = new SystemModule(
    "Airline Management"
  );
  public TOUR_CONTENT_MANAGEMENT: SystemModule = new SystemModule(
    "Tour Content Management"
  );
  public HOTEL_CONTENT_MANAGEMENT: SystemModule = new SystemModule(
    "Hotel Content Management"
  );
  public DISTINATION_MANAGEMENT: SystemModule = new SystemModule(
    "Destination Management"
  );
  public TRANSLATION_MANAGEMENT: SystemModule = new SystemModule(
    "Translation Management"
  );
  public COUNTRY_MANAGEMENT: SystemModule = new SystemModule(
    "Country Management"
  );
  public CITY_MANAGEMENT: SystemModule = new SystemModule("City Management");
  public CURRENCY_MANAGEMENT: SystemModule = new SystemModule(
    "Currency Management"
  );
  public GALLERY_MANAGEMENT: SystemModule = new SystemModule(
    "Gallery Management"
  );
  public LANGUAGE_MANAGEMENT: SystemModule = new SystemModule(
    "Language Management"
  );

  public FAQ_MANAGEMENT: SystemModule = new SystemModule("Faq Management");

  public APPLICATION_MANAGEMENT: SystemModule = new SystemModule(
    "Application Message"
  );

  // Leavel permession
  public FRONTEND_CONFIGURATION: SystemModule = new SystemModule(
    "Frontend Configuration"
  );
  // Sublevel permission
  public THEME_MANAGEMENT: SystemModule = new SystemModule("Theme Management");
  public MENU_MANAGEMENT: SystemModule = new SystemModule("Menu Management");
  public PAGE_COMPONENT_MANAGEMENT: SystemModule = new SystemModule(
    "Page Component Management"
  );
  public PAGE_BUILDER: SystemModule = new SystemModule("Page Builder");

  // Leavel permession
  public INSTANCE_MANAGEMENT: SystemModule = new SystemModule(
    "Instance Management"
  );

  // Leavel permession
  public SYSTEM_SETTINGS: SystemModule = new SystemModule("System Settings");
  // subleval permission
  public SEARCH_CONFIGURATION: SystemModule = new SystemModule(
    "Search Configuration"
  );
  public EXCHANGE_RATE: SystemModule = new SystemModule("Exchange Rate");

  // sublevel 2 permission
  public FLIGHT_SEARCH_CONFIGURATION: SystemModule = new SystemModule(
    "Flight Search Configuration"
  );
  public HOTEL_SEARCH_CONFIGURATION: SystemModule = new SystemModule(
    "Hotel Search Configuration"
  );
  public PACKAGE_SEARCH_CONFIGURATION: SystemModule = new SystemModule(
    "Package Search Configuration"
  );
  public TOUR_SEARCH_CONFIGURATION: SystemModule = new SystemModule(
    "Tour Search Configuration"
  );
  public CAR_SEARCH_CONFIGURATION: SystemModule = new SystemModule(
    "Car Search Configuration"
  );
  public SHOP_SEARCH_CONFIGURATION: SystemModule = new SystemModule(
    "Shop Search Configuration"
  );

  // Leavel permession
  public PACKAGE_MANAGEMENT: SystemModule = new SystemModule(
    "Package Management"
  );

  // Leavel permession
  public MID_OFFICE: SystemModule = new SystemModule("Mid Office");
  // sublevel permission
  public MID_OFFICE_DASHBOARD: SystemModule = new SystemModule(
    "Mid Office Dashboard"
  );
  public TRANSACTIONS: SystemModule = new SystemModule("Transactions");
  public CHART_OF_ACCOUNTS: SystemModule = new SystemModule(
    "Chart of Accounts"
  );
  public PROFIT_AND_LOSS: SystemModule = new SystemModule("Profit and Loss");
  public BALANCE_SHEET: SystemModule = new SystemModule("Balance Sheet");
  public RECONCILIATION: SystemModule = new SystemModule("Reconciliation");
  public ACCOUNT_TRANSACTIONS: SystemModule = new SystemModule(
    "Account Transactions"
  );
  public INVOICE: SystemModule = new SystemModule("Invoice");
  public TRAVEL_FORM: SystemModule = new SystemModule("Travel_Form");
  public CUSTOMER_APPROVEL: SystemModule = new SystemModule(
    "Customer Approval"
  );
  public REFUNDS: SystemModule = new SystemModule("Refunds");

  // level permission
  public HELP_AND_FAQ: SystemModule = new SystemModule("Help and FAQ");

  // level permission
  public BOOKING_HISTORY: SystemModule = new SystemModule("Booking History");

  // level permission
  public BUSSIESS_INTELLIGENCE: SystemModule = new SystemModule(
    "Business Intelligence"
  );
  // sublevel
  public TOP_TEN: SystemModule = new SystemModule("Top 10");

  // level permission
  public SUPPORT: SystemModule = new SystemModule("Support");

  //product categories
  public ProductCategorey: SystemModule = new SystemModule(
    "Product Categories"
  );

  //Package Management
  public Package_Management: SystemModule = new SystemModule(
    "Package Management"
  );

  //Package Management
  public Profiler: SystemModule = new SystemModule("Profiler");

  // Sublevel package list
  public Package_List: SystemModule = new SystemModule("Package List");

  // Trave request form
  public Travel_Approval_Request: SystemModule = new SystemModule(
    "Travel Approval Request"
  );

  //

  public Privacy_Policy: SystemModule = new SystemModule("Privacy Policy");

  public User_Explorer: SystemModule = new SystemModule("User Explorer");

  public User_Terms: SystemModule = new SystemModule("User Terms");

  //--> Module Setting permission

  public user_registrations: SystemModule = new SystemModule(
    "user_registrations"
  );
  public external_registrations: SystemModule = new SystemModule(
    "external_registrations"
  );
  public package_search: SystemModule = new SystemModule("package_search");
  public flight_search: SystemModule = new SystemModule("flight_search");
  public tour_search: SystemModule = new SystemModule("tour_search");
  public hotel_search: SystemModule = new SystemModule("hotel_search");
}
