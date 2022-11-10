export interface Order {
  tracking_id: string;
  items: Array<OrderItem>;
  contact_full_address: string;
  created_at: number;
  operation_id: number;
  updated_at: number;
  domain: string;
  id: string;
  courier_name: string;
  initial_lng: number;
  evidences: Array<OrderEvidence>;
  state: string;
  cargamos_tracking_id: string;
  rating: string;
  is_pin_editable: boolean;
  feedback: string;
  courier_phone: string;
  pin_lat: number;
  initial_lat: number;
  master_order_id: string;
  pin_lng: number;
  contact_name: string;
  assigned_courier: string;
  contact_phone: string;
  active_states: Array<OrderState>;
}

export interface OrderItem {
  img_urls: string;
  name: string;
  price_unit: string;
  price: string;
  quantity: number;
}

export interface OrderState {
  created_at: number;
  state: string;
  enabled: boolean;
}

export interface OrderEvidence {
  [key: string]: Array<string>;
}

