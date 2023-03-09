package v1

import (
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

// +genclient
// +k8s:deepcopy-gen:interfaces=k8s.io/apimachinery/pkg/runtime.Object

// Appointment is a specification for an Appointment resource
type Appointment struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty"`

	Spec   AppointmentSpec   `json:"spec"`
	Status AppointmentStatus `json:"status"`
}

// AppointmentSpec is the spec for a Appointment resource
type AppointmentSpec struct {
	DeploymentLabelSelector DeploymentLabelSelector `json:"deploymentLabelSelector"`
	DeploymentNamespace     *int32                  `json:"deploymentNamespace"`
}

type DeploymentLabelSelector struct {
	Labels map[string]string
}

// AppointmentStatus is the status for a Appointment resource
type AppointmentStatus struct {
	AvailableReplicas int32 `json:"availableReplicas"`
}

// +k8s:deepcopy-gen:interfaces=k8s.io/apimachinery/pkg/runtime.Object

// AppointmentList is a list of Appointment resources
type AppointmentList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata"`

	Items []Appointment `json:"items"`
}
